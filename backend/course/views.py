from rest_framework import status, viewsets, mixins
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.response import Response

from code_generate.models import CourseJoinCode
from course.models import Course, Lesson
from course.serializers import (
    CourseDetailSerializer,
    CourseSerializer,
    JoinCourseSerializer,
    LessonDetailSerializer,
)


class CourseViewSet(viewsets.ModelViewSet):
    def get_queryset(self):
        if self.request.user.is_staff:
            return Course.objects.all()
        return Course.objects.filter(trainees=self.request.user)

    def get_serializer_class(self):
        if self.action == "retrieve":
            return CourseDetailSerializer
        return CourseSerializer

    def get_permission_classes(self):
        if self.action in (
            "retrieve",
            "list",
        ):
            return [IsAuthenticated]
        return [IsAdminUser]


class JoinCourseViewSet(viewsets.ViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = JoinCourseSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)

        try:
            code = CourseJoinCode.objects.get(code=serializer.data["code"])
        except CourseJoinCode.DoesNotExist:
            return Response(
                {"code": "Invalid code"}, status=status.HTTP_400_BAD_REQUEST
            )

        code.course.trainees.add(request.user)
        code.delete()
        return Response()


class LessonViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    queryset = Lesson.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = LessonDetailSerializer
