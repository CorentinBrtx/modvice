"""
Define the REST verbs relative to the users
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import UserRepository
from util import parse_params


class UserResource(Resource):
    """ Verbs relative to the users """

    @staticmethod
    @swag_from("../swagger/user/GET.yml")
    def get(user_name):
        """ Return an user key information based on his name """
        user = UserRepository.get(user_name= user_name)
        return jsonify({"user": {"user_name": user.user_name, "age": user.age}})

    @staticmethod
    @parse_params(
        Argument("age", location="json", required=True, help="The age of the user.")
    )
    @swag_from("../swagger/user/POST.yml")
    def post(user_name, age):
        """ Create an user based on the sent information """
        user = UserRepository.create(
            user_name= user_name, age=age
        )
        return jsonify({"user": {"user_name": user.user_name, "age": user.age}})

    @staticmethod
    @parse_params(
        Argument("age", location="json", required=True, help="The age of the user.")
    )
    @swag_from("../swagger/user/PUT.yml")
    def put(user_name, age):
        """ Update an user based on the sent information """
        repository = UserRepository()
        user = repository.update(user_name= user_name, age=age)
        return jsonify({"user": {"user_name": user.user_name, "age": user.age}})


class UsersResource(Resource):
    """ Verbs relative to users """

    @staticmethod
    @swag_from("../swagger/user/GET_ALL.yml")
    def get():
        """ Return all the users """
        users = UserRepository.get_all()
        return jsonify({"users": [{"user_name": user.user_name, "age": user.age} for user in users]})
