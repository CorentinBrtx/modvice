""" Defines the User repository """

from models import User


class UserRepository:
    """ The repository for the user model """

    @staticmethod
    def get(user_name):
        """ Query a user by user name """
        return User.query.filter_by(user_name= user_name).one()

    @staticmethod
    def get_all():
        """ Query all the users """
        return User.query.all()

    def update(self, user_name, age, password):
        """ Update a user's age """
        user = self.get(user_name)
        user.age = age
        user.password = password

        return user.save()

    @staticmethod
    def create(user_name, age, password):
        """ Create a new user """
        user = User(user_name= user_name, age=age, password=password)

        return user.save()
