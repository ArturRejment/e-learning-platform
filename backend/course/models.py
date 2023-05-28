import uuid

from django.contrib.auth import get_user_model
from django.core.exceptions import ValidationError
from django.db import models


class Course(models.Model):
    id = models.UUIDField(
        verbose_name="id",
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
    )

    name = models.CharField(
        verbose_name="nazwa kursu",
        max_length=100,
    )

    description = models.TextField(
        verbose_name="opis kursu",
        blank=True,
    )

    trainees = models.ManyToManyField(
        to=get_user_model(),
        verbose_name="uczestnicy kursu",
        related_name="trainees",
    )

    def __str__(self):
        return self.name


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
