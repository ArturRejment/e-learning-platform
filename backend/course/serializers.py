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
    exam_status = SerializerMethodField()

    class Meta:
        model = Course
        fields = (
            "id",
            "name",
            "description",
            "exam_status",
        )

    def get_exam_status(self, course):
        return course.get_user_exam_status(self.context["request"].user)


class CourseDetailSerializer(ModelSerializer):
    lessons = LessonListSerializer(many=True)
    exam_status = SerializerMethodField()

    class Meta:
        model = Course
        fields = (
            "id",
            "name",
            "description",
            "exams",
            "lessons",
            "exam_status",
        )

    def get_exam_status(self, course):
        return course.get_user_exam_status(self.context["request"].user)


class JoinCourseSerializer(Serializer):
    code = CharField(required=True)

    class Meta:
        fields = ("code",)
