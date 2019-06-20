""" Defines the User repository """

from models import User


class UserRepository:
    """ The repository for the user model """

    @staticmethod
    def get(username):
        """ Query a user by user name """
        return User.query.filter_by(username= username).one()

    @staticmethod
    def get_all():
        """ Query all the users """
        return User.query.all()

    def update(self, username, age, password):
        """ Update a user's age """
        user = self.get(username)
        user.age = age
        user.password = password

        return user.save()

    @staticmethod
    def create(username, age, password):
        """ Create a new user """
        user = User(username= username, age=age, password=password)

        return user.save()
