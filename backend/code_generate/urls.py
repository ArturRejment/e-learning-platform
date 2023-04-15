from django.urls import path
from .views import CodeGenerateView

urlpatterns = [
    path("", CodeGenerateView.as_view(), name="generate_code"),
]