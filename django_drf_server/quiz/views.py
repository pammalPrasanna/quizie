from django.shortcuts import redirect, render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.contrib.auth.models import User

from .models import Quiz, Question, Choice, Result
from .serializers import QuestionSerializer, QuizSerializer, ResultSerializer


# -------------------- Quiz Api starts-------------------------------------

@api_view(['GET', 'DELETE'])
def get_delete_quiz(request, quiz_id):
    response = Response()
    quiz = Quiz.objects.get(pk = quiz_id)
    if request.method == 'GET':      
        serializer = QuizSerializer(quiz)
        response = Response(serializer.data)
    
    elif request.method == 'DELETE':
        message = 'Quiz "{}" is deleted sucessfully.'.format(str(quiz.name))
        quiz.delete()
        response = Response({'message' : message})
    
    return response

@api_view(['GET', 'POST', 'PATCH'])
def get_post_patch_quizes(request):
    response = Response()
    if request.method == 'GET':
        quiz = Quiz.objects.all()
        serializer =  QuizSerializer(quiz, many = True)
        response = Response(serializer.data)
    elif request.method == 'POST':
        _quiz = request.data['quiz']
        user =  User.objects.get(pk =  _quiz.get('created_by'))
        quiz = Quiz(name = _quiz.get('name'), created_by = user)
        quiz.save()
        serializer =  QuizSerializer(quiz)
        response = Response(serializer.data)
    elif request.method == 'PATCH':
        _quiz = request.data['quiz']
        quiz = Quiz.objects.get(pk = _quiz.get('id'))
        quiz.name = _quiz.get('name')
        quiz.save()
        serializer = QuizSerializer(quiz)
        response = Response(serializer.data)
    return response

# -------------------- Quiz Api ends-------------------------------------


# -------------------- Question Api Starts-------------------------------------


# Api to get all questions and choices belongs to a Quiz
@api_view(['GET'])
def get_questions(request, quiz_id):
    quizes = Question.objects.filter(quiz_id =  quiz_id) 
    serializer =  QuestionSerializer(quizes, many = True)
    return Response(serializer.data)

# Api to get, delete single question with choices
@api_view(['GET', 'DELETE'])
def get_delete_question(request, qid):
    response = Response()
    questionWithChoice = Question.objects.get(pk =  qid) 
    if  request.method == 'GET':
        serializer =  QuestionSerializer(questionWithChoice)
        response = Response(serializer.data)
    
    elif request.method == 'DELETE':
        message = 'Question " {} " is deleted sucessfully.'.format(str(questionWithChoice.question))
        questionWithChoice.delete()
        response = Response({'message' : message})

    return response

@api_view(['POST', 'PATCH'])
def post_patch_question(request):
    response = Response()
    if request.method == 'POST':
        _question  = request.data['question']
        quiz = Quiz.objects.get(pk = _question.get('quiz_id'))
        question = Question(
            quiz_id = quiz,
            question = _question.get('question'),
            objective_type = _question.get('objective_type'),
            maximum_mark = _question.get('maximum_mark'),
            answer_explantion = _question.get('answer_explantion'),
        )
        question.save()

        choices = request.data['choices']
        for choice in choices:
            choice = Choice(
                question_id = question,
                choice = choice.get('choice'),
                is_answer = bool(choice.get('is_answer')),
            )
            choice.save()

        serializer = QuestionSerializer(question)
        response = Response(serializer.data)
    
    if request.method == 'PATCH':
        print(request.data)
        _question = request.data['question']
        question = Question.objects.get(pk = _question['id'])
        question.question = _question['question']
        question.objective_type = _question['objective_type']
        question.maximum_mark = _question['maximum_mark']
        question.answer_explanation = _question['answer_explanation']
        question.save()

        choices = request.data['choices']
        for choice in choices:
            if choice.get('question_id') != -1:
                _choice = Choice.objects.get(pk = choice['id'])
                _choice.choice = choice['choice']
                _choice.is_answer = choice['is_answer']
                _choice.save()
            else:
                _choice = Choice(
                    question_id = question,
                    choice = choice.get('choice'),
                    is_answer = bool(choice.get('is_answer')),
                )
                _choice.save()

        serializer = QuestionSerializer(question)
        response = Response(serializer.data)
    
    return response

        
# -------------------- Question Api ends-------------------------------------

# -------------------- Results Api starts-------------------------------------

@api_view(['GET', 'POST'])
def get_post_results(request):
    response = Response()
    if request.method == 'GET':
        results = Result.objects.all()
        serializer = ResultSerializer(results, many = True)
        response  = Response(serializer.data)
    if request.method == 'POST':
        _result = request.data['result']
        _quiz  = Quiz.objects.get(pk = _result['quiz_id'])
        _user  = User.objects.get(pk = _result['user_id'])
        result = Result(
            quiz = _quiz,
            user = _user,
            marks = _result['marks'],
            time = _result['time'],
        )
        result.save()
        response = Response({'message':'Result was updated successfully!'})
    return response

@api_view(['GET'])
def get_quiz_results(request, qid):
    _quiz = Quiz.objects.get(pk = qid)
    results = Result.objects.filter(quiz = _quiz)
    serializer = ResultSerializer(results, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def get_user_results(request, uid):
    _user = User.objects.get(pk = uid)
    results = Result.objects.filter(user = _user)
    serializer = ResultSerializer(results, many = True)
    return Response(serializer.data)

