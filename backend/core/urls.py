from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter
from drf_spectacular.views import (SpectacularAPIView, SpectacularRedocView,
                                   SpectacularSwaggerView)
from code_generate.views import CodeGenerateViewSet

router = DefaultRouter()
router.register(r"code_generate", CodeGenerateViewSet, basename="code_generate")

urlpatterns = [
    path("admin/", admin.site.urls),
    path("auth/", include("authentication.urls")),
    path("schema/", SpectacularAPIView.as_view(api_version="api"), name="schema"),
    path(
        "swagger-ui/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
    path("", include(router.urls)),
]
