"""
Defines the blueprint for the notations
"""
from flask import Blueprint
from flask_restful import Api

from resources import NotationResource, NotationsMovieResource, NotationsUserResource

NOTATION_BLUEPRINT = Blueprint("notation", __name__)
Api(NOTATION_BLUEPRINT).add_resource(
    NotationResource, "/Notation/<string:movie_title>/<string:username>"
)

Api(NOTATION_BLUEPRINT).add_resource(
    NotationsMovieResource, "/Notation/movie/<string:movie_title>"
)

Api(NOTATION_BLUEPRINT).add_resource(
    NotationsUserResource, "/Notation/user/<string:username>"
)
