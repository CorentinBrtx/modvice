"""
Define the REST verbs relative to the movies
"""

from flasgger import swag_from
from flask.json import jsonify
from flask_restful import Resource
from flask_restful.reqparse import Argument

from repositories import MovieRepository, NotationRepository
from util import parse_params


class MovieResource(Resource):
    """ Verbs relative to the movies """

    @staticmethod
    @swag_from("../swagger/movie/GET.yml")
    def get(title):
        """ Return a movie key information based on his title """
        movie = MovieRepository.get(title=title)
        return jsonify({"movie": {
                            "actor1": movie.actor1,
                            "actor2": movie.actor2,
                            "date": movie.date,
                            "producer": movie.producer,
                            "title": movie.title
                        }})

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
        return jsonify({"movie": {
                            "actor1": movie.actor1,
                            "actor2": movie.actor2,
                            "date": movie.date,
                            "producer": movie.producer,
                            "title": movie.title
                        }})

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
        return jsonify({"movie": {
                            "actor1": movie.actor1,
                            "actor2": movie.actor2,
                            "date": movie.date,
                            "producer": movie.producer,
                            "title": movie.title
                        }})

    @staticmethod
    @swag_from("../swagger/movie/DELETE.yml")
    def delete(title):
        """ Delete a movie """
        MovieRepository.delete(title=title)
        return jsonify({"movie": {"title": title}})

class MoviesResource(Resource):
    """ Verbs relative to movies """

    @staticmethod
    @swag_from("../swagger/movie/GET_ALL.yml")
    def get():
        """ Return all the movies """
        movies = MovieRepository.get_all()
        return jsonify({"movies": [{"movie": {
                                        "actor1": movie.actor1,
                                        "actor2": movie.actor2,
                                        "date": movie.date,
                                        "producer": movie.producer,
                                        "title": movie.title
                                    }} 
                                    for movie in movies]})

class MoviesBestResource (Resource):

    @staticmethod
    @swag_from("../swagger/movie/GET_BEST.yml")
    def get():
        """ Return the 10 best movies """
        movies = MovieRepository.get_all()
        means = {}
        for movie in movies:
            means[movie.title] = MovieRepository.get_mean(movie.title)
        list_bests = sorted(means.items(), key=lambda t: t[1], reverse=True)
        return jsonify({"movies": [{"movie": {
                                        "title": best[0],
                                        "mean": best[1]
                                    }} 
                                    for best in list_bests]})

class MoviesBestUserResource (Resource):

    @staticmethod
    @swag_from("../swagger/movie/GET_BEST_USER.yml")
    def get(username):
        """ Return the 10 best movies for a user """
        movies = MovieRepository.get_all()
        notations = NotationRepository.get_all_user(username=username)
        seens = [notation.movie_title for notation in notations]
        means = {}
        for movie in movies:
            means[movie.title] = MovieRepository.get_mean(movie.title)
        list_bests = sorted(means.items(), key=lambda t: t[1], reverse=True)
        list_bests_not_seen = [best for best in list_bests if best[0] not in seens]
        return jsonify({"movies": [{"movie": {
                                        "title": best[0],
                                        "mean": best[1]
                                    }} 
                                    for best in list_bests_not_seen]})
