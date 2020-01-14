from django.db import models

class Product(models.Model):
    image = models.ImageField(upload_to='img/')
    name = models.CharField(max_length=64, blank=True, null=True, default=None)
    description = models.TextField(max_length=256, blank=True, null=True, default=None)
    price = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    old_price = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return "{}".format(self.name, self.price)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'
        
class ProductInBasket(models.Model):
    session_key = models.CharField(max_length=128, blank=True, null=True, default=None)
    product = models.ForeignKey(Product, on_delete=models.CASCADE, blank=True, null=True, default=None)
    count = models.PositiveIntegerField(default=1)
    price = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    total = models.DecimalField(max_digits=8, decimal_places=2, default=0)
    is_active = models.BooleanField(default=True)
    created = models.DateTimeField(auto_now_add=True, auto_now=False)
    updated = models.DateTimeField(auto_now_add=False, auto_now=True)

    def __str__(self):
        return "{}".format(self.product)

    class Meta:
        verbose_name = 'Product in basket'
        verbose_name_plural = 'Products in basket'

    def save(self, *args, **kwargs):
        price = self.product.price
        self.price = price
        self.total += price
        super(ProductInBasket, self).save(*args, **kwargs)

