from django.core.validators import MaxValueValidator, MinValueValidator
from django.db import models

from course.models import Course


class Exam(models.Model):
    course = models.ForeignKey(
        to=Course, on_delete=models.CASCADE, related_name="exams"
    )

    passing_threshold = models.IntegerField(
        verbose_name="Passing threshold in %",
        validators=(MinValueValidator(1), MaxValueValidator(100)),
    )

    description = models.TextField()

    def __str__(self):
        return f"Exam for {self.course} course"

    def examine(self, data) -> int:
        questions: list[ExamQuestion] = self.questions.all()
        correct_answers_count = 0

        for question in questions:
            answer = next((sub for sub in data if sub["question_id"] == question.id))
            if answer.get("answer") == question.correct_answer:
                correct_answers_count += 1

        return correct_answers_count


class ExamQuestion(models.Model):
    class CorrectAnswer(models.TextChoices):
        A = "a"
        B = "b"
        C = "c"
        D = "d"

    exam = models.ForeignKey(
        to=Exam, on_delete=models.CASCADE, related_name="questions"
    )

    question = models.CharField(max_length=255)

    answer_a = models.CharField(max_length=255)

    answer_b = models.CharField(max_length=255)

    answer_c = models.CharField(max_length=255)

    answer_d = models.CharField(max_length=255)

    correct_answer = models.CharField(max_length=1, choices=CorrectAnswer.choices)

    def __str__(self):
        return f"Question for {self.exam}"
