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
