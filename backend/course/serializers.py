from rest_framework.serializers import (
    CharField,
    ModelSerializer,
    Serializer,
    SerializerMethodField,
)

from course.models import Course, Lesson


class LessonListSerializer(ModelSerializer):
    class Meta:
        model = Lesson
        fields = (
            "id",
            "name",
        )


class LessonDetailSerializer(ModelSerializer):
    class Meta:
        model = Lesson
        fields = (
            "id",
            "name",
            "description",
            "video_title",
            "video_description",
            "video_url",
            "pdf_title",
            "pdf_description",
            "pdf_url",
        )

class CourseSerializer(ModelSerializer):
    class Meta:
        model = Course
        fields = (
            "id",
            "name",
            "description",
        )


class CourseDetailSerializer(ModelSerializer):
    lessons = LessonListSerializer(many=True)

    class Meta:
        model = Course
        fields = (
            "id",
            "name",
            "description",
            "exams",
            "lessons",
        )


class JoinCourseSerializer(Serializer):
    code = CharField(required=True)

    class Meta:
        fields = ("code",)
