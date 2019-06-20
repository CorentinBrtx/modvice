"""
Define the Notation model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class Notation(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Notation model """

    __tablename__ = "notation"

    value = db.Column(db.Integer, primary_key=False)

    movie_title = db.Column(db.String(300), db.ForeignKey('movie.title'), primary_key=True)
    movie = db.relationship("Movie", back_populates="notation", foreign_keys=[movie_title])

    username = db.Column(db.String(300), db.ForeignKey('user.username'), primary_key=True)
    user = db.relationship("User", back_populates="notation", foreign_keys=[username])
    

    def __init__(self, value, movie_title, username):
        """ Create a new Notation """
        self.value = value
        self.username = username
        self.movie_title = movie_title
