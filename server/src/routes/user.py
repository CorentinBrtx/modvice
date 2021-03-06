"""
Defines the blueprint for the users
"""
from flask import Blueprint
from flask_restful import Api

from resources import UserResource, UsersResource

USER_BLUEPRINT = Blueprint("user", __name__)
Api(USER_BLUEPRINT).add_resource(
    UserResource, "/user/<string:username>"
)

Api(USER_BLUEPRINT).add_resource(
    UsersResource, "/users"
)
