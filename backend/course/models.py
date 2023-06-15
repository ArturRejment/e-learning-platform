import uuid

from django.contrib.auth import get_user_model
from django.db import models


class Course(models.Model):
    id = models.UUIDField(
        verbose_name="id",
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    name = models.CharField(
        verbose_name="course name",
        max_length=100,
    )

    description = models.TextField(
        verbose_name="course description",
        blank=True,
    )

    trainees = models.ManyToManyField(
        to=get_user_model(),
        verbose_name="course participants",
        related_name="trainees",
    )

    def __str__(self):
        return self.name

    def get_user_exam_status(self, user: "User") -> str:
        from exam.models import UserExam

        try:
            user_exam = UserExam.objects.get(user=user, exam=self.exams.first())
        except UserExam.DoesNotExist:
            return "Not taken"
        if user_exam.passed:
            return "Passed"
        return "Failed"


class Lesson(models.Model):
    class Type(models.TextChoices):
        PDF = "pdf"
        VIDEO = "video"

    id = models.UUIDField(
        verbose_name="id",
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    name = models.CharField(max_length=100)

    description = models.TextField(null=True, blank=True)

    video_title = models.CharField(max_length=255, null=True, blank=True)

    video_url = models.URLField(null=True, blank=True)

    video_description = models.TextField(null=True, blank=True)

    pdf_title = models.CharField(max_length=255, null=True, blank=True)

    pdf_url = models.FileField(upload_to="pdf", null=True, blank=True)

    pdf_description = models.TextField(null=True, blank=True)

    course = models.ForeignKey(Course, on_delete=models.CASCADE, related_name="lessons")


class CourseFeedback(models.Model):
    course_feedback = models.TextField()
    course_name = models.TextField()


class SiteFeedback(models.Model):
    site_feedback = models.TextField()
