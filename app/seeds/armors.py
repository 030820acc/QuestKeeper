from app.models import db, Armor


# Adds a demo user, you can add other users here if you want
def seed_armors():

    leather = Armor(
        name='leather armor', character_id=1, stealth_disadvantage=False)


    db.session.add(leather)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_armors():
    db.session.execute('TRUNCATE armors RESTART IDENTITY CASCADE;')
    db.session.commit()