from rest_framework import mixins, serializers, viewsets
from rest_framework.decorators import action
from rest_framework.response import Response

from exam.models import Exam
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
        serializer = ExamineExamSerializer(data=request.data, many=True)
        serializer.is_valid(raise_exception=True)

        try:
            correct_answers_number = exam.examine(serializer.data)
        except StopIteration:
            raise serializers.ValidationError(
                "Data is missing an answer for a question, or has a surplus answer."
            )

        score = correct_answers_number / exam.questions.count() * 100
        return Response(
            {
                "score": f"{score}%",
                "passed": score >= exam.passing_threshold,
                "passing_threshold": exam.passing_threshold,
            }
        )
