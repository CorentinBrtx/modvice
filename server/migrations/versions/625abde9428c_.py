""" create the Movie table

Revision ID: 625abde9428c
Revises: 51e2c29ad95
Create Date: 2019-06-18 08:40:39.247396

"""

# revision identifiers, used by Alembic.
revision = '625abde9428c'
down_revision = '51e2c29ad95'

from alembic import op
import sqlalchemy as sa


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('movie',
    sa.Column('title', sa.String(length=300), nullable=False),
    sa.Column('producer', sa.String(length=300), nullable=True),
    sa.Column('date', sa.Integer(), nullable=True),
    sa.Column('actor1', sa.String(length=300), nullable=True),
    sa.Column('actor2', sa.String(length=300), nullable=True),
    sa.PrimaryKeyConstraint('title')
    )
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('movie')
    # ### end Alembic commands ###