""" Defines the User repository """

from models import User


class UserRepository:
    """ The repository for the user model """

    @staticmethod
    def get(user_name):
        """ Query a user by last and  user name """
        return User.query.filter_by(user_name= user_name).one()

    def update(self, user_name, age):
        """ Update a user's age """
        user = self.get(user_name)
        user.age = age

        return user.save()

    @staticmethod
    def create(user_name, age):
        """ Create a new user """
        user = User(user_name= user_name, age=age)

        return user.save()
