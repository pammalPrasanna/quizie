from django.urls import path, include

from rest_framework.routers import DefaultRouter



from .views import get_user_results, get_quiz_results, get_post_results, get_post_patch_quizes, get_questions, get_delete_question, get_delete_quiz, post_patch_question

router = DefaultRouter()

urlpatterns = [
    path('quizes/', get_post_patch_quizes, name='get_post_patch_quizes'),
    path('quiz/<int:quiz_id>', get_delete_quiz, name='get_delete_quiz'),

    
    path('questions/<int:quiz_id>', get_questions, name='get_questions'),
    path('question/', post_patch_question, name='post_patch_question'),
    path('question/<int:qid>', get_delete_question, name='get_delete_question'),


    path('quiz/results/<int:qid>', get_quiz_results, name='get_quiz_results'),
    path('user/results/<int:uid>', get_user_results, name='get_user_results'),
    path('results/', get_post_results, name='get_post_results'),
    path('', include(router.urls)),
]