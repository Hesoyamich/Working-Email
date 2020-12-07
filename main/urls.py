from django.urls import path
from .views import MainPage, PolicyPage

urlpatterns = [
    path('', MainPage, name="main_page"),
    path('policy/', PolicyPage, name="policy")
]