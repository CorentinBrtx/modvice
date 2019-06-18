"""
Define the User model
"""
from . import db
from .abc import BaseModel, MetaBaseModel

class User(db.Model, BaseModel, metaclass=MetaBaseModel):
    """ The User model """

    __tablename__ = "user"
    
    user_name = db.Column(db.String(300), primary_key=True)
    age = db.Column(db.Integer, nullable=True)

    notation = db.relationship("Notation", back_populates="user")

    def __init__(self, user_name, age=None):
        """ Create a new User """
        self.user_name = user_name
        self.age = age
