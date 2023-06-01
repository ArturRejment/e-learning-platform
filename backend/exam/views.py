from decimal import Decimal, ROUND_HALF_UP

from rest_framework import mixins, serializers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST

from exam.models import Exam, UserExam
from exam.serializers import ExamineExamSerializer, ExamSerializer


class ExamViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    queryset = Exam.objects.all()

    def get_serializer_class(self):
        if self.action == "examine_exam":
            return ExamineExamSerializer
        return ExamSerializer

    @action(methods=["POST"], detail=True, url_path="examine")
    def examine_exam(self, request, pk):
        exam = self.get_object()

        if UserExam.objects.filter(user=request.user, exam=exam).exists():
            return Response(
                "Nie możesz podejść ponownie do tego egzaminu",
                status=HTTP_400_BAD_REQUEST,
            )

        serializer = ExamineExamSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)

        try:
            correct_answers_number = exam.examine(serializer.data)
        except StopIteration:
            raise serializers.ValidationError(
                "Data is missing an answer for a question, or has a surplus answer."
            )

        score = float(correct_answers_number / exam.questions.count() * 100)
        passed = score >= exam.passing_threshold

        rounded_score = Decimal(
            Decimal(score).quantize(Decimal(".01"), rounding=ROUND_HALF_UP)
        )

        UserExam.objects.create(
            exam=exam,
            user=request.user,
            passed=passed,
            obtained_percentage_score=rounded_score,
        )
        return Response(
            {
                "score": f"{rounded_score}%",
                "passed": passed,
                "passing_threshold": exam.passing_threshold,
            }
        )
