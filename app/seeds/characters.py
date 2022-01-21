from app.models import db, Character


# Adds a demo user, you can add other users here if you want
def seed_characters():

    beebo = Character(
        user_id=1, name='Beebo', character_class='ranger', race='wood elf', level=1, speed=35, armor_class=14, health=31, init='+3', hit_dice='1d10', strength=12, wisdom=15, intelligence=10, charisma=8, constitution=13, dexterity=17, spell_save=12, spell_mod='+4')


    db.session.add(beebo)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_characters():
    db.session.execute('TRUNCATE characters RESTART IDENTITY CASCADE;')
    db.session.commit()
