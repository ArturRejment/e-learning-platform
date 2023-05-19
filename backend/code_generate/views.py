import random
import string

from rest_framework import viewsets
from rest_framework.permissions import AllowAny, IsAdminUser
from rest_framework.response import Response

from .models import Code, CourseJoinCode
from .serializers import CodeGenerateSerializer, CourseJoinCodeCreateSerializer


class CodeGenerateViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]
    serializer_class = CodeGenerateSerializer

    def create(self, request):
        serializer = CodeGenerateSerializer(data=request.data)
        codes = []

        if not serializer.is_valid():
            return Response(serializer.errors["non_field_errors"])

        num_codes = int(serializer.data["count"])
        for i in range(num_codes):
            new_code = "".join(
                random.choices(string.ascii_letters + string.digits, k=20)
            )
            while Code.objects.filter(code=new_code).exists():
                new_code = "".join(
                    random.choices(string.ascii_letters + string.digits, k=20)
                )
            Code.objects.create(code=new_code)
            codes.append(new_code)
        return Response(codes)


class CourseJoinCodeViewSet(viewsets.ViewSet):
    permission_classes = [AllowAny]
    serializer_class = CourseJoinCodeCreateSerializer

    def create(self, request):
        serializer = self.serializer_class(data=request.data)
        serializer.is_valid(raise_exception=True)
        course_id = serializer.data["course_id"]

        codes = []
        for _ in range(serializer.data["amount"]):
            new_code = "".join(
                random.choices(string.ascii_letters + string.digits, k=20)
            )
            while CourseJoinCode.objects.filter(code=new_code).exists():
                new_code = "".join(
                    random.choices(string.ascii_letters + string.digits, k=20)
                )
            CourseJoinCode.objects.create(code=new_code, course_id=course_id)
            codes.append(new_code)
        return Response(codes)
