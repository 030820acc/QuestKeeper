from app.models import db, Weapon


# Adds a demo user, you can add other users here if you want
def seed_weapons():

    dagger = Weapon(
        name='dagger', character_id=1, dmg_dice='1d4 piercing', keywords='Thrown Range(20/60), Finesse, Light'
    )
    scimitar = Weapon(
        name="scimitar", character_id=1, dmg_dice='1d6 slashing', keywords='Finesse, Light'
    )
    


    db.session.add(dagger)
    db.session.add(scimitar)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_weapons():
    db.session.execute('TRUNCATE weapons RESTART IDENTITY CASCADE;')
    db.session.commit()
