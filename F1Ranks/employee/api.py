from .models import Employee
from rest_framework import viewsets, permissions
from .serializers import EmployeeSerializer

from rest_framework import viewsets


# class EmployeeViewSet(viewsets.ReadOnlyModelViewSet):
#     """
#     This viewset automatically provides `list` and `retrieve` actions.
#     """
#     queryset = Employee.objects.all()
#     serializer_class = EmployeeSerializer


class EmployeeViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    serializer_class = EmployeeSerializer

    #queryset = Employee.objects.all()
    def get_queryset(self):
        return Employee.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
