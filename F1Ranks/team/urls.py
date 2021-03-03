from rest_framework import routers
from .api import TeamViewSet

router = routers.DefaultRouter()

router.register('api/team', TeamViewSet, 'team')

urlpatterns = router.urls
