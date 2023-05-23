# Generated by Django 4.2.1 on 2023-05-23 18:41

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=255)),
                ('ID', models.IntegerField(unique=True)),
                ('GPA', models.FloatField()),
                ('birthDate', models.DateField()),
                ('gender', models.CharField(max_length=1)),
                ('level', models.IntegerField(validators=[django.core.validators.MaxValueValidator(4), django.core.validators.MinValueValidator(1)])),
                ('status', models.BooleanField()),
                ('department', models.CharField(max_length=3)),
                ('email', models.CharField(max_length=255)),
                ('mobilePhone', models.CharField(max_length=255)),
            ],
        ),
    ]
