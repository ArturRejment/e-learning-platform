import random
import string
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAdminUser
from .models import Code
from .serializers import CodeGenerateSerializer

class CodeGenerateView(APIView):
    queryset = Code.objects.all()
    permission_classes = [IsAdminUser]
    serializer_class = CodeGenerateSerializer

    def post(self, request):
        codes = []
        num_codes = request.data.get('count', None)

        for i in range(num_codes):
            new_code = ''.join(random.choices(string.ascii_letters + string.digits, k=20))
            while Code.objects.filter(code=new_code).exists():
                new_code = ''.join(random.choices(string.ascii_letters + string.digits, k=20))
            codes.append(new_code)

        return Response({'codes': codes})
