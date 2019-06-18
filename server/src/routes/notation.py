"""
Defines the blueprint for the notations
"""
from flask import Blueprint
from flask_restful import Api

from resources import NotationResource

NOTATION_BLUEPRINT = Blueprint("notation", __name__)
Api(NOTATION_BLUEPRINT).add_resource(
    NotationResource, "/Notation/<string:movie_title>/<string:username>"
)
