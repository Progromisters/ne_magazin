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
        return "{}".format(self.name)

    class Meta:
        verbose_name = 'Product'
        verbose_name_plural = 'Products'