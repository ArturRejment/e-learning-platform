from rest_framework.serializers import CharField, ModelSerializer, Serializer

from course.models import Course


class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = (
            "id",
            "name",
            "description",
        )


class CourseDetailSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = (
            "id",
            "name",
            "description",
            "exams",
        )


class JoinCourseSerializer(Serializer):
    code = CharField(required=True)

    class Meta:
        fields = ("code",)
