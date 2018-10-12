from django.shortcuts import render
from .models import Product, ProductInBasket
from django.http import JsonResponse


def home(request):
    products = Product.objects.filter(is_active=True)
    
    session_key = request.session.session_key
    if not session_key:
      request.session.cycle_key()
        
    print(request.session.session_key)
    
    return render(request, 'main/index.html', locals())


def basket_adding(request):
    return_dict = dict()
    session_key = request.session.session_key
    print(request.POST)
    product_id = request.POST.get("product_id")

    new_product = ProductInBasket.objects.create(session_key=session_key, product_id=product_id)
    products_total = ProductInBasket.objects.filter(session_key=session_key, is_active=True).count()
    return_dict["products_total"] = products_total
    return JsonResponse(return_dict)
