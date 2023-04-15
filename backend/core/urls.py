from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework.routers import DefaultRouter

from course.views import CourseViewSet

router = DefaultRouter()
router.register(r"course", CourseViewSet, basename="course")

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
