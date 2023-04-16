from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator


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

    class Meta:
        model = get_user_model()
        fields = (
            "id",
            "email",
            "password",
            "re_password",
            "first_name",
            "last_name",
        )

    def validate(self, attrs: dict) -> dict:
        if attrs["password"] != attrs["re_password"]:
            raise serializers.ValidateError(
                {"password": "Password fields didn't match."}
            )
        return attrs

    def create(self, validated_data: dict) -> get_user_model():
        user = get_user_model().objects.create(
            email=validated_data["email"],
            first_name=validated_data["first_name"],
            last_name=validated_data["last_name"],
        )
        user.set_password(validated_data["password"])
        user.save()

        return user
