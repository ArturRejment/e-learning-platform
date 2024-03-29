# Generated by Django 4.1.7 on 2023-05-07 19:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):
    dependencies = [
        ("course", "0001_initial"),
        ("code_generate", "0001_initial"),
    ]

    operations = [
        migrations.AlterField(
            model_name="code",
            name="code",
            field=models.CharField(max_length=20, unique=True),
        ),
        migrations.CreateModel(
            name="CourseJoinCode",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("code", models.CharField(max_length=20, unique=True)),
                (
                    "course",
                    models.ForeignKey(
                        on_delete=django.db.models.deletion.CASCADE, to="course.course"
                    ),
                ),
            ],
        ),
    ]
