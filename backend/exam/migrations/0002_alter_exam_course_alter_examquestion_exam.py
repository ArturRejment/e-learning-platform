# Generated by Django 4.1.7 on 2023-05-27 09:47

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("course", "0002_lesson"),
        ("exam", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="exam",
            name="course",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="exams",
                to="course.course",
            ),
        ),
        migrations.AlterField(
            model_name="examquestion",
            name="exam",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="questions",
                to="exam.exam",
            ),
        ),
    ]