""" Defines the Notation repository """

from models import Notation


class NotationRepository:
    """ The repository for the notation model """

    @staticmethod
    def get(username, movie_title):
        """ Query a notation of an user on a film """
        return Notation.query.filter_by(username=username,movie_title=movie_title).one()

    def update(self, username, movie_title, value):
        """ Update a user's notation of a film """
        notation = self.get(username, movie_title)
        notation.value = value

        return notation.save()

    @staticmethod
    def create(username, movie_title, value):
        """ Create a new notation of a film by an user """
        notation = Notation(username=username,movie_title=movie_title, value=value)

        return notation.save()

    @staticmethod
    def delete(self, username, movie_title):
        """ Delete a notation of a film by an user"""
        notation = self.get(username, movie_title)

        return notation.save()
