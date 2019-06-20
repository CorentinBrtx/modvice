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
    def get(username):
        """ Return an user key information based on his name """
        user = UserRepository.get(username= username)
        return jsonify({"user": {"username": user.username, "age": user.age, "password": user.password}})

    @staticmethod
    @parse_params(
        Argument("age", location="json", required=True, help="The age of the user."),
        Argument("password", location="json", required=True, help="The password of the user.")
    )
    @swag_from("../swagger/user/POST.yml")
    def post(username, age, password):
        """ Create an user based on the sent information """
        user = UserRepository.create(
            username= username, age=age, password=password
        )
        return jsonify({"user": {"username": user.username, "age": user.age, "password":user.password}})

    @staticmethod
    @parse_params(
        Argument("age", location="json", required=True, help="The age of the user."),
        Argument("password", location="json", required=True, help="The password of the user.")
    )
    @swag_from("../swagger/user/PUT.yml")
    def put(username, age, password):
        """ Update an user based on the sent information """
        repository = UserRepository()
        user = repository.update(username= username, age=age, password=password)
        return jsonify({"user": {"username": user.username, "age": user.age, "password":user.password}})

    @staticmethod
    @swag_from("../swagger/user/DELETE.yml")
    def delete(username):
        """ Delete a user """
        UserRepository.delete(username=username)
        return jsonify({"user": {"username": username}})


class UsersResource(Resource):
    """ Verbs relative to users """

    @staticmethod
    @swag_from("../swagger/user/GET_ALL.yml")
    def get():
        """ Return all the users """
        users = UserRepository.get_all()
        return jsonify({"users": [{"username": user.username, "age": user.age, "password":user.password} for user in users]})
