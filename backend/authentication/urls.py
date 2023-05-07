from django.urls import path
from rest_framework_simplejwt.views import (TokenObtainPairView,
                                            TokenRefreshView, TokenVerifyView)

from .views import RegisterView

urlpatterns = [
    path("token/obtain", TokenObtainPairView.as_view(), name="login"),
    path("token/verify", TokenVerifyView.as_view(), name="verify"),
    path("token/refresh", TokenRefreshView.as_view(), name="refresh"),
    path("register", RegisterView.as_view(), name="register"),
]
