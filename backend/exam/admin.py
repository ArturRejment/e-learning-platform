from django.contrib import admin

from exam.models import Exam, ExamQuestion


class ExamQuestionInline(admin.StackedInline):
    model = ExamQuestion
    extra = 0


class ExamAdmin(admin.ModelAdmin):
    inlines = [ExamQuestionInline]


admin.site.register(Exam, ExamAdmin)
admin.site.register(ExamQuestion)
