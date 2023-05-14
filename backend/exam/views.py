from rest_framework import mixins, viewsets

from exam.models import Exam
from exam.serializers import ExamSerializer


class ExamViewSet(viewsets.GenericViewSet, mixins.RetrieveModelMixin):
    queryset = Exam.objects.all()
    serializer_class = ExamSerializer
