"""
Define the User model
"""
from . import db
from .abc import BaseModel, MetaBaseModel

class User(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The User model """

    __tablename__ = "user"
    
    username = db.Column(db.String(300), primary_key=True)
    age = db.Column(db.Integer, nullable=True)
    password = db.Column(db.String(300))

    notation = db.relationship("Notation", back_populates="user")

    def __init__(self, username, age=None, password=""):
        """ Create a new User """
        self.username = username
        self.age = age
        self.password = password
