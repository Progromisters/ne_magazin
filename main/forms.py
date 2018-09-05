# -*- coding: utf-8 -*-
from django import forms
from .models import Buyer

class BuyerForm(forms.ModelForm):

     class Meta:
         model = Buyer
         exclude = [""]