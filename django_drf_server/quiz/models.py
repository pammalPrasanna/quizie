from django.contrib.auth.models import User
from django.db import models

class Quiz(models.Model): 
    name = models.CharField(max_length = 255)
    created_by = models.ForeignKey(User, related_name='author', on_delete=models.SET_NULL, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.name

class Result(models.Model):
    quiz = models.ForeignKey(Quiz, related_name = 'results', on_delete = models.SET_NULL, null = True, blank = True)
    user = models.ForeignKey(User, related_name = 'result', on_delete = models.CASCADE)
    marks = models.FloatField(default = 0.0)
    time = models.CharField(max_length=15)
    attempt_on = models.DateTimeField(auto_now_add = True)

class Question(models.Model):
    OBJECTIVE_TYPE_MULTIPLE = 'multiple'
    OBJECTIVE_TYPE_SINGLE = 'single'

    # Creating choice to select whether the question has (one) or (more than one) answers 
    CHOICES_OBJECTIVE_TYPE = (
        (OBJECTIVE_TYPE_MULTIPLE, 'Multiple'),
        (OBJECTIVE_TYPE_SINGLE, 'Single')
    )

    quiz_id = models.ForeignKey(Quiz, related_name='quiz', on_delete=models.CASCADE)
    question = models.CharField(max_length=255)
    answer_explantion = models.CharField(max_length = 500, blank = True, null = True)
    objective_type = models.CharField(max_length=255, choices = CHOICES_OBJECTIVE_TYPE, default = OBJECTIVE_TYPE_SINGLE)
    maximum_mark = models.FloatField(default=1.0)
    created_at = models.DateTimeField(auto_now_add = True)

        
    def __str__(self):
        return self.question



class Choice(models.Model):
    question_id = models.ForeignKey(Question, related_name='choices', on_delete=models.CASCADE, blank = True, null = True)
    choice = models.CharField(max_length=255, default='choice')
    is_answer = models.BooleanField(default = False, blank = True)
    created_at = models.DateTimeField(auto_now_add = True)

    def __str__(self):
        return self.choice