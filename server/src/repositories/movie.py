""" Defines the Movie repository """

from models import Movie


class MovieRepository:
    """ The repository for the movie model """

    @staticmethod
    def get(title):
        """ Query a movie by its title """
        return Movie.query.filter_by(title=title).one()

    @staticmethod
    def get_all():
        """ Query all the movies """
        return Movie.query.filter_by()

    def update(self, title, producer, date, actor1, actor2):
        """ Update a movie's age """
        movie = self.get(title)
        movie.producer = producer
        movie.date = date
        movie.actor1 = actor1
        movie.actor2 = actor2

        return movie.save()

    @staticmethod
    def create(title, producer, date, actor1, actor2):
        """ Create a new movie """
        movie = Movie(title=title, producer=producer, date=date, actor1=actor1, actor2=actor2)

        return movie.save()
