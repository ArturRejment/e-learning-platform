from django.contrib.auth import get_user_model
from rest_framework import generics, viewsets
from rest_framework.decorators import action
from rest_framework.permissions import AllowAny
from rest_framework.response import Response

from .serializers import UserRegisterSerializer, UserSerializer


class UserViewSet(viewsets.GenericViewSet):
    serializer_class = UserSerializer

    @action(methods=["GET"], detail=False)
    def me(self, request):
        serializer = self.get_serializer(request.user)
        return Response(serializer.data)


class RegisterView(generics.CreateAPIView):
    queryset = get_user_model().objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserRegisterSerializer
