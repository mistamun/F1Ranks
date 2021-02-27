from django.db import models
from django.contrib.auth.models import User


class Employment(models.Model):
    team = models.CharField(max_length=50)
    start_date = models.DateField()
    end_date = models.DateField()


class RankedUser(User):
    employment = models.ForeignKey(Employment, on_delete=models.CASCADE)
