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
    resource = SerializerMethodField()

    class Meta:
        model = Lesson
        fields = (
            "id",
            "name",
            "lesson_type",
            "resource",
        )

    def get_resource(self, lesson):
        if lesson.lesson_type == lesson.Type.VIDEO:
            return lesson.youtube_video_url
        return lesson.pdf_file.url


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
