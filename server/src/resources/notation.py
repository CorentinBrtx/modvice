"""
Define the REST verbs relative to the users
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument


from util import parse_params


class NotationResource(Resource):
    """ Verbs relative to the notations """

    @staticmethod
    @swag_from("../swagger/notation/GET.yml")
    def get(user_lastname, user_firstname, movie_title):
        """ Return a notation key information based on a user and a movie """
        notation = 12
        return jsonify({"notation": notation})

    @staticmethod
    @parse_params(
        Argument("value", location="json", required=True, help="The value of the notation.")
    )
    @swag_from("../swagger/notation/POST.yml")
    def post(user_lastname, user_firstname, movie_title, value):
        """ Create a notation based on the sent information """
        notation = 14
        return jsonify({"notation": notation})

    @staticmethod
    @parse_params(
        Argument("value", location="json", required=True, help="The value of the notation.")
    )
    @swag_from("../swagger/notation/PUT.yml")
    def put(user_lastname, user_firstname, movie_title, value):
        """ Update a notation based on the sent information """
        notation = 19
        return jsonify({"notation": notation})
