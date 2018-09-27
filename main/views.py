from django.shortcuts import render
from .models import Product


def home(request):
    products = Product.objects.filter(is_active=True)
    
    session_key = request.session.session_key
    if not session_key:
      request.session.cycle_key()
    return render(request, 'main/index.html', locals())

