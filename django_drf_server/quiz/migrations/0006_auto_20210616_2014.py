# Generated by Django 3.2.4 on 2021-06-16 14:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quiz', '0005_auto_20210616_1504'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='choice',
            name='belongs_to',
        ),
        migrations.RemoveField(
            model_name='question',
            name='belongs_to',
        ),
        migrations.AddField(
            model_name='question',
            name='choices',
            field=models.ManyToManyField(related_name='choices', to='quiz.Choice'),
        ),
        migrations.AddField(
            model_name='quiz',
            name='questions',
            field=models.ManyToManyField(related_name='questions', to='quiz.Question'),
        ),
    ]
