from rest_framework import serializers
from .models import Code

class CodeGenerateSerializer(serializers.ModelSerializer):
    count = serializers.IntegerField()
    code = serializers.CharField(read_only=True)

    class Meta:
        model = Code
        fields =  "__all__"