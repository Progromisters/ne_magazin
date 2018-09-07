from django.shortcuts import render, redirect
from .forms import RegistrationForm


def home(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('/')
        else:
            return render(request, 'main/index.html', locals())
    else:
        form = RegistrationForm()
        return render(request, 'main/index.html', locals())

