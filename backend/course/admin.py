from django.contrib import admin

from course.models import Course, Lesson, CourseFeedback, SiteFeedback

admin.site.register(Course)
admin.site.register(Lesson)
admin.site.register(CourseFeedback)
admin.site.register(SiteFeedback)
