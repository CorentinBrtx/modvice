from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument
from flask import abort

from repositories import UserRepository
from util import parse_params


class AuthenticateResource(Resource):

    @staticmethod
    @parse_params(
        Argument("username", location="json", required=True, help="The username to auth"),
        Argument("password", location="json", required=True, help="The password to auth")
    )
    @swag_from("../swagger/authenticate/POST.yml")
    def post(username, password):
        """ Identify a user """
        print(username)
        try:
            user = UserRepository.get(username= username)
            if user.password == password:
                return "OK"
            else:
                abort(401)
        except:
            abort(401)