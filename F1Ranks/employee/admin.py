from django.contrib import admin

# Register your models here.
from .models import Employee, EmploymentStint

admin.site.register(Employee)
admin.site.register(EmploymentStint)
