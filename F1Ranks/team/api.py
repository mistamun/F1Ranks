from .models import Team
from rest_framework import viewsets, permissions
from .serializers import TeamSerializer

from rest_framework import viewsets


class TeamViewSet(viewsets.ModelViewSet):
    # permission_classes = [
    #     permissions.IsAuthenticated,
    # ]
    serializer_class = TeamSerializer

    def get_queryset(self):
        return Team.objects.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
