"""
Define the REST verbs relative to the users
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import NotationRepository
from util import parse_params


class NotationResource(Resource):
    """ Verbs relative to the notations """

    @staticmethod
    @swag_from("../swagger/notation/GET.yml")
    def get(username, movie_title):
        """ Return a notation key information based on a user and a movie """
        notation = NotationRepository.get(username=username,movie_title=movie_title)
        return jsonify({"notation": {"movie_title": notation.movie_title, "username": notation.username, "value": notation.value}})

    @staticmethod
    @parse_params(
        Argument("value", location="json", required=True, help="The value of the notation.")
    )
    @swag_from("../swagger/notation/POST.yml")
    def post(username, movie_title, value):
        """ Create a notation based on the sent information """
        notation = NotationRepository.create(username=username,movie_title=movie_title, value=value)
        return jsonify({"notation": {"movie_title": notation.movie_title, "username": notation.username, "value": notation.value}})

    @staticmethod
    @parse_params(
        Argument("value", location="json", required=True, help="The value of the notation.")
    )
    @swag_from("../swagger/notation/PUT.yml")
    def put(username, movie_title, value):
        """ Update a notation based on the sent information """
        repository = NotationRepository()
        notation = repository.update(username=username,movie_title=movie_title, value=value)
        return jsonify({"notation": {"movie_title": notation.movie_title, "username": notation.username, "value": notation.value}})
