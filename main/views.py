from django.shortcuts import render
from .models import Product, ProductInBasket
from django.http import JsonResponse


def home(request):
    products = Product.objects.filter(is_active=True)

    session_key = request.session.session_key
    if not session_key:
      request.session.cycle_key()
    
    return render(request, 'main/index.html', locals())


def basket_adding(request):
    return_dict = dict()
    session_key = request.session.session_key
    
    product_id = request.POST.get("product_id")
    product_count = request.POST.get("product_count")
    product_is_delete = request.POST.get("is_delete")

    if product_is_delete=="true":
        ProductInBasket.objects.filter(id=product_id).update(is_active=False)
    else:
        new_product, created = ProductInBasket.objects.get_or_create(session_key=session_key, product_id=product_id,
                                                                     is_active=True, defaults={'count': product_count})
        print(new_product)
        print(created)
        if not created:
            new_product.count += 1
            new_product.save(force_update=True)

    products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True)
    return_dict["products"] = list()
    for item in products_in_basket:
        product_dict = dict()
        product_dict["pr_id"] = item.id
        product_dict["pr_name"] = item.product.name
        product_dict["pr_price"] = item.product.price
        product_dict["pr_count"] = item.count
        return_dict["products"].append(product_dict)

    products_total = products_in_basket.count()
    return_dict["products_total"] = products_total

    return JsonResponse(return_dict)

def checkout(request):
    session_key = request.session.session_key
    products_in_basket = ProductInBasket.objects.filter(session_key=session_key, is_active=True)
    return render(request, 'main/checkout.html', locals())