from django.db import models

from course.models import Course


class Code(models.Model):
    code = models.CharField(unique=True, max_length=20)


class CourseJoinCode(models.Model):
    code = models.CharField(unique=True, max_length=20)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
