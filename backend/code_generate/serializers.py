from rest_framework import serializers

from course.models import Course


class CodeGenerateSerializer(serializers.Serializer):
    count = serializers.IntegerField()

    class Meta:
        fields = "count"

    def validate(self, data):
        if data["count"] < 1:
            raise serializers.ValidationError("Number of codes must be greater than 0.")
        return data


class CourseJoinCodeCreateSerializer(serializers.Serializer):
    amount = serializers.IntegerField(required=True)
    course_id = serializers.CharField(required=True)

    class Meta:
        fields = "amount"

    def validate(self, data):
        if data["amount"] < 1:
            raise serializers.ValidationError("Number of codes must be greater than 0.")

        if not Course.objects.filter(id=data["course_id"]).exists():
            raise serializers.ValidationError(f"Invalid course id.")

        return data
