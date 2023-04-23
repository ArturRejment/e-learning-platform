from rest_framework import serializers

class CodeGenerateSerializer(serializers.Serializer):
    count = serializers.IntegerField()

    class Meta:
        fields = ('count')

    def validate(self, data):
        if data['count'] < 1:
            raise serializers.ValidationError("Number of codes must be greater than 0.")
        return data
    