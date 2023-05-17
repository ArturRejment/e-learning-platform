from rest_framework import serializers

from exam.models import Exam, ExamQuestion


class ExamQuestionSerializer(serializers.ModelSerializer):
    class Meta:
        model = ExamQuestion
        fields = (
            "id",
            "question",
            "answer_a",
            "answer_b",
            "answer_c",
            "answer_d",
        )


class ExamSerializer(serializers.ModelSerializer):
    questions = ExamQuestionSerializer(many=True)

    class Meta:
        model = Exam
        fields = ("id", "description", "questions")


class ExamineExamSerializer(serializers.Serializer):
    question_id = serializers.IntegerField()
    answer = serializers.CharField(max_length=1)

    def validate(self, attrs):
        if attrs["answer"] not in ExamQuestion.CorrectAnswer.values:
            raise serializers.ValidationError(
                {"answer": f"Invalid value {attrs['answer']} for answer"}
            )
        return attrs
