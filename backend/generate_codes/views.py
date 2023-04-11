import random
import string
from django.http import JsonResponse
from rest_framework.decorators import permission_classes
from . import permissions

@permission_classes([permissions.IsAdminUser])
def generate_codes_view(request, num_codes):
    codes = []
    for i in range(num_codes):
        code = ''.join(random.choices(string.ascii_letters + string.digits, k=128))
        codes.append(code)
    return JsonResponse({'codes': codes})