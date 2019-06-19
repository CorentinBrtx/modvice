""" Defines the Notation repository """

from models import Notation


class NotationRepository:
    """ The repository for the notation model """

    @staticmethod
    def get(username, movie_title):
        """ Query a notation of a user on a movie """
        return Notation.query.filter_by(username=username,movie_title=movie_title).one()

    @staticmethod
    def get_all_movie(movie_title):
        """ Query all the notations on a movie """
        return Notation.query.filter_by(movie_title=movie_title).all()

    @staticmethod
    def get_all_user(username):
        """ Query all the notations of a user """
        return Notation.query.filter_by(username=username).all()

    def update(self, username, movie_title, value):
        """ Update a user's notation of a movie """
        notation = self.get(username, movie_title)
        notation.value = value

        return notation.save()

    @staticmethod
    def create(username, movie_title, value):
        """ Create a new notation of a movie by a user """
        notation = Notation(username=username,movie_title=movie_title, value=value)

        return notation.save()

    @staticmethod
    def delete(username, movie_title):
        """ Delete a notation of a movie by a user"""
        return Notation.query.filter_by(username=username,movie_title=movie_title).one().delete()
