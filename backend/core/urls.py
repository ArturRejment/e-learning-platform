from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView
from rest_framework.routers import DefaultRouter

from authentication.views import UserViewSet
from code_generate.views import CodeGenerateViewSet, CourseJoinCodeViewSet
from course.views import CourseViewSet, JoinCourseViewSet, LessonViewSet
from exam.views import ExamViewSet
from rating.views import RatingViewSet

router = DefaultRouter()
router.register(r"course", CourseViewSet, basename="course")
router.register(r"lesson", LessonViewSet, basename="lesson")
router.register(r"rating", RatingViewSet, basename="rating")
router.register(r"join/course", JoinCourseViewSet, basename="join-course")
router.register(r"code_generate", CodeGenerateViewSet, basename="code_generate")
router.register(
    r"course-join-codes", CourseJoinCodeViewSet, basename="course-join-codes"
)
router.register(r"exam", ExamViewSet, basename="exam")
router.register(r"user", UserViewSet, basename="user")


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

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
