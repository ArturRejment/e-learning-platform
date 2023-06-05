from django.db import models
from django.contrib.auth import get_user_model
from course.models import Course

# Create your models here.

class Rating(models.Model):
    rating = models.PositiveIntegerField()
    user = models.ForeignKey(to=get_user_model(), on_delete=models.CASCADE, related_name="user")
    course = models.ForeignKey(Course, on_delete=models.CASCADE)