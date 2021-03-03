from django.db import models
from django.contrib.auth.models import User
from team.models import Team


class EmploymentStint(models.Model):
    team = models.ForeignKey(Team, on_delete=models.CASCADE)
    start_date = models.DateField()
    end_date = models.DateField()

    def __str__(self):
        return f'{self.team.name} - {self.start_date} - {self.end_date}'


class Employee(models.Model):
    name = models.CharField(max_length=100)
    stint = models.ManyToManyField(EmploymentStint)

    def __str__(self):
        return self.name





