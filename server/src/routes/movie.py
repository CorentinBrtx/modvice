"""
Defines the blueprint for the movies
"""
from flask import Blueprint
from flask_restful import Api

from resources import MovieResource, MoviesResource, MoviesBestResource, MoviesBestUserResource

MOVIE_BLUEPRINT = Blueprint("movie", __name__)
Api(MOVIE_BLUEPRINT).add_resource(
    MovieResource, "/movie/<string:title>"
)
Api(MOVIE_BLUEPRINT).add_resource(
    MoviesResource, "/movies"
)
Api(MOVIE_BLUEPRINT).add_resource(
    MoviesBestResource, "/moviesbest"
)
Api(MOVIE_BLUEPRINT).add_resource(
    MoviesBestUserResource, "/moviesbestuser/<string:username>"
)

