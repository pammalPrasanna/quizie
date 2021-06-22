from django.contrib import admin

# from .models import Quiz, QuizQuestions, Choice, QuestionBank
# admin.site.register(Quiz)
# admin.site.register(QuizQuestions)
# admin.site.register(QuestionBank)
# admin.site.register(Choice)

from .models import Quiz, Question, Choice, Result

admin.site.register(Quiz)
admin.site.register(Question)
admin.site.register(Choice)
admin.site.register(Result)
