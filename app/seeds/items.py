from app.models import db, Item


# Adds a demo user, you can add other users here if you want
def seed_items():

    backpack = Item(
        name='backpack', character_id=1, quantity=1)
    rope = Item(
        name='rope', character_id=1, quantity=1)
    lute = Item(
        name='lute', character_id=1, quantity=1)


    db.session.add(backpack)
    db.session.add(rope)
    db.session.add(lute)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
