from django.shortcuts import render
from django.core.mail import send_mail

# Create your views here.
def MainPage(request):
    if request.method == "POST":
        name = request.POST['name']
        email = request.POST['email']
        text = request.POST['text']

        #Отправка почты
        send_mail(
            name, #Имя пользователя
            text, #Текст сообщения
            email, #Почта пользователя
            ['lolworm952@gmail.com'], #Почта, на которую придёт сообщение
        )

        return render(request, 'main/index.html', {'name' : name})

    else: 
        return render(request, 'main/index.html')

def PolicyPage(request):
    return render(request, 'main/policy.html')