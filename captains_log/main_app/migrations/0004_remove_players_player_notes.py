# Generated by Django 3.1.1 on 2020-09-30 10:49

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0003_auto_20200930_1043'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='players',
            name='player_notes',
        ),
    ]
