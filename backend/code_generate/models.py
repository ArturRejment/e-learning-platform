from django.db import models

class Code(models.Model):
    code = models.CharField(max_length=20)


