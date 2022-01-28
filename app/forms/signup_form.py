from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, ValidationError
from app.models import User


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')

def password_valid(form, field):
    # Checking if password matches
    password = field.data
    if len(password) < 1:
        raise ValidationError('Password is required.')

def name_valid(form, field):
    # Checking if password matches
    name = field.data
    if len(name) < 1:
        raise ValidationError('Name is required.')
    

class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    name = StringField('name', validators=[DataRequired(), name_valid])
    password = StringField('password', validators=[DataRequired(), password_valid])
