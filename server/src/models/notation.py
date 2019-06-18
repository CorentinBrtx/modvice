"""
Define the Notation model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class Notation(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Notation model """

    __tablename__ = "notation"

    id = db.Column(db.Integer, primary_key=True)
    value = db.Column(db.Integer, primary_key=False)

    movie_title = db.Column(db.Integer, db.ForeignKey('movie.title'))
    movie = db.relationship("Movie", back_populates="notation")

    user_firstname = db.Column(db.Integer, db.ForeignKey('user.firstname'))
    user_lastname = db.Column(db.Integer, db.ForeignKey('user.lastname'))
    user = db.relationship("User", back_populates="notation")
    

    def __init__(self, id, value, movie_title, user_firstname, user_lastname):
        """ Create a new User """
        self.id = id
        self.value = value
        self.user_firstname = user_firstname
        self.user_lastname = user_lastname
        self.movie_title = movie_title
