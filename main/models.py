from django.db import models

class Buyer(models.Model):
    name = models.CharField(max_length=128)
    email = models.EmailField()

    def __str__(self):
        return "{}".format(self.name)

    class Meta:
        verbose_name = "Buyer"
        verbose_name_plural = "Buyers"