import random
import string
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser
from .models import Code
from .serializers import CodeGenerateSerializer

class CodeGenerateViewSet(viewsets.ViewSet):
    permission_classes = [IsAdminUser]
    serializer_class = CodeGenerateSerializer

    def create(self, request):
        serializer = CodeGenerateSerializer(data=request.data)
        codes = []

        if serializer.is_valid():
            num_codes = int(serializer.data['count'])
            for i in range(num_codes):
                new_code = ''.join(random.choices(string.ascii_letters + string.digits, k=20))
                while Code.objects.filter(code=new_code).exists():
                    new_code = ''.join(random.choices(string.ascii_letters + string.digits, k=20))
                Code.objects.create(code=new_code)
                codes.append(new_code)
            return Response(codes)
        else:
            return Response(serializer.errors['non_field_errors']);
