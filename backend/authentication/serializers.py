from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from code_generate.models import Code


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = get_user_model()
        exclude = ["password"]


class UserRegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        required=True,
        validators=[UniqueValidator(queryset=get_user_model().objects.all())],
    )

    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password],
    )

    re_password = serializers.CharField(write_only=True, required=True)

    registration_token = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = get_user_model()
        fields = (
            "id",
            "email",
            "password",
            "re_password",
            "first_name",
            "last_name",
            "registration_token",
        )

    def validate(self, attrs: dict) -> dict:
        if not Code.objects.filter(code=attrs["registration_token"]).exists():
            raise serializers.ValidationError(
                {"registration_token": "Provided code is invalid."}
            )

        if attrs["password"] != attrs["re_password"]:
            raise serializers.ValidateError(
                {"password": "Password fields didn't match."}
            )
        return attrs

    def create(self, validated_data: dict) -> get_user_model():
        Code.objects.filter(code=validated_data["registration_token"]).delete()
        user = get_user_model().objects.create(
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
        )
        user.set_password(validated_data["password"])
        user.save()

        return user
