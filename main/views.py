# from django.shortcuts import render
#
#
# def home(request):
#     return render(request, 'main/index.html', locals())


from allauth.account.views import SignupView
from allauth.account.forms import LoginForm


class CustomSignupView(SignupView):
    def get_context_data(self, **kwargs):
        context = super(CustomSignupView, self).get_context_data(**kwargs)
        context['login_form'] = LoginForm()
        return context

home = CustomSignupView.as_view()