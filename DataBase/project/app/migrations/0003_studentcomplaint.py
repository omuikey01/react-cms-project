# Generated by Django 5.0.2 on 2024-02-12 19:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_adminlogin'),
    ]

    operations = [
        migrations.CreateModel(
            name='StudentComplaint',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('stuid', models.IntegerField()),
                ('subject', models.CharField(max_length=200)),
                ('datetime', models.CharField(max_length=200)),
                ('queryexplain', models.CharField(max_length=500)),
                ('ans', models.CharField(max_length=800)),
            ],
        ),
    ]