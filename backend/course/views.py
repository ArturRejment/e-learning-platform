from rest_framework import viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticated

from course.models import Course
from course.serializers import CourseSerializer


class CourseViewSet(viewsets.ModelViewSet):
    queryset = Course.objects.all()
    serializer_class = CourseSerializer

    def get_permission_classes(self):
        if self.action in (
            "retrieve",
            "list",
        ):
            return [IsAuthenticated]
        return [IsAdminUser]
