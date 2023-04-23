from django.db import models

class Code(models.Model):
    code = models.CharField(unique=True, max_length=20)
