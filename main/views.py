from django.shortcuts import render
from .forms import BuyerForm

def home(request):
    form = BuyerForm(request.POST or None)
    if request.POST and form.is_valid():
        new_form = form.save()
    return render(request, 'main/home.html', locals())