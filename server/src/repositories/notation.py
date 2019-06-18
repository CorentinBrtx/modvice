""" Defines the Notation repository """

from models import Notation


class NotationRepository:
    """ The repository for the notation model """

    @staticmethod
    def get(last_name, first_name,title):
        """ Query a notation of an user on a film """
        return Notation.query.filter_by(last_name=last_name, first_name=first_name,title=title).one()

    def update(self, last_name, first_name, title, notation):
        """ Update a user's notation of a film """
        note = self.get(last_name, first_name,title)
        note.notation = notation

        return note.save()

    @staticmethod
    def create(last_name, first_name, title, notation):
        """ Create a new notation of a film by an user """
        note = Notation(last_name=last_name, first_name=first_name, title=title, notation=notation)

        return note.save()

    @staticmethod
    def delete(last_name, first_name, title, notation):
        """ Delete a notation of a film by an user"""
        note=self.get(last_name, first_name, title).delete

        return note.save()
