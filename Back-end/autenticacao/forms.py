
# forms.py
from allauth.account.forms import SignupForm
from django import forms


class CustomSignupForm(SignupForm):
    first_name = forms.CharField(max_length=30, label='First Name')
    last_name = forms.CharField(max_length=30, label='Last Name')

    def __init__(self, *args, **kwargs):
        super(CustomSignupForm, self).__init__(*args, **kwargs)
        # Torna o campo de e-mail obrigatório
        self.fields['email'].required = True
        # Remove o campo de nome de usuário
        self.fields.pop('username', None)
        self.fields.pop('password2')

    def save(self, request, commit=True):
        user = super(CustomSignupForm, self).save(request)
        user.first_name = self.cleaned_data['first_name']
        user.last_name = self.cleaned_data['last_name']
        user.email = self.cleaned_data['email']
        user.username = user.email  # Use o e-mail como nome de usuário
        user.save()
        return user