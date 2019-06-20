"""
Defines the blueprint for auth
"""
from flask import Blueprint
from flask_restful import Api

from resources import AuthenticateResource

AUTH_BLUEPRINT = Blueprint("auth", __name__)
Api(AUTH_BLUEPRINT).add_resource(
    AuthenticateResource, "/authenticate"
)