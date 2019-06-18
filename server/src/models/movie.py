"""
Define the Movie model
"""
from . import db
from .abc import BaseModel, MetaBaseModel


class Movie(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The Movie model """

    __tablename__ = "movie"

    title = db.Column(db.String(300), primary_key=True)
    producer = db.Column(db.String(300), nullable=True)
    date = db.Column(db.Integer, nullable=True)
    actor1 = db.Column(db.String(300), nullable=True)
    actor2 = db.Column(db.String(300), nullable=True)

    notations = db.relationship("Notation", back_populates="movie")


    def __init__(self, title, producer=None, date=None, actor1=None, actor2=None):
        """ Create a new Movie """
        self.title = title
        self.producer = producer
        self.date = date
        self.actor1 = actor1
        self.actor2 = actor2
