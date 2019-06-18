"""
Define the REST verbs relative to the movies
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import MovieRepository
from util import parse_params


class MovieResource(Resource):
    """ Verbs relative to the movies """

    @staticmethod
    @swag_from("../swagger/user/GET.yml")
    def get(title):
        """ Return a movie key information based on his title """
        movie = MovieRepository.get(title=title)
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("producer", location="json", required=True, help="The producer of the movie."),
        Argument("date", location="json", required=True, help="The date of the movie."),
        Argument("actor1", location="json", required=True, help="The main actor of the movie."),
        Argument("actor2", location="json", required=True, help="The secondary actor of the movie.")
    )
    @swag_from("../swagger/movie/POST.yml")
    def post(title, producer, date, actor1, actor2):
        """ Create a movie based on the sent information """
        movie = MovieRepository.create(
            title=title, producer=producer, date=date, actor1=actor1, actor2=actor2
        )
        return jsonify({"movie": movie.json})

    @staticmethod
    @parse_params(
        Argument("producer", location="json", required=True, help="The producer of the movie."),
        Argument("date", location="json", required=True, help="The date of the movie."),
        Argument("actor1", location="json", required=True, help="The main actor of the movie."),
        Argument("actor2", location="json", required=True, help="The secondary actor of the movie.")
    )
    @swag_from("../swagger/movie/PUT.yml")
    def put(title, producer, date, actor1, actor2):
        """ Update an movie based on the sent information """
        repository = MovieRepository()
        movie = repository.update(title=title, producer=producer, date=date, actor1=actor1, actor2=actor2)
        return jsonify({"movie": movie.json})
