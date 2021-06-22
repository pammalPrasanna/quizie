from rest_framework import serializers
from .models import Question, Quiz, Choice, Result
from django_drf_server.serializers import UserSerializer



class QuizSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only = True)
    class Meta:
        model = Quiz
        fields = '__all__'



class ChoiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Choice
        fields = '__all__'


class QuestionSerializer(serializers.ModelSerializer):
    choices = ChoiceSerializer(read_only = True, many = True)
    class Meta:
        model = Question
        fields = (
            'id',
            'question',
            'objective_type',
            'answer_explantion',
            'maximum_mark',
            'choices',
        )


class ResultSerializer(serializers.ModelSerializer):
    quiz = QuizSerializer(read_only = True)
    user = UserSerializer(read_only = True)
    class Meta:
        model = Result
        fields = '__all__'




