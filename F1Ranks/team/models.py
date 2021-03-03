from django.db import models


class Team(models.Model):
    name = models.CharField(max_length=100)
    first_year = models.IntegerField(default=2000)
    first_race = models.IntegerField(default=1)
    last_year = models.IntegerField(default=2050)
    last_race = models.IntegerField(default=99)

    def __str__(self):
        return self.name
