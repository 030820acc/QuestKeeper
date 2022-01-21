from app.models import db, Spell


# Adds a demo user, you can add other users here if you want
def seed_spells():

    thunderwave = Spell(
        name='Thunderwave', character_id=1, level_school='1st level evocation', casting_time='1 action', components='V S', target='self(15-foot cube)', range='self(15 foot cube)', duration='Instantaneous', details="A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn’t pushed. In addition, unsecured objects that are completely within the area of effect are automatically pushed 10 feet away from you by the spell’s effect, and the spell emits a thunderous boom audible out to 300 feet. At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st."
    )
    leomunds = Spell(
        name="Leomund's Tiny Hut", character_id=1, level_school='3rd level evocation(ritual)', casting_time='1 minute', components="V S M (A small crystal bead)", target='10 foot radius around and above you', range='self (10 foot radius hemisphere', duration='8 hours', details="A 10-foot-radius immobile dome of force springs into existence around and above you and remains stationary for the duration. The spell ends if you leave its area. Nine creatures of Medium size or smaller can fit inside the dome with you. The spell fails if its area includes a larger creature or more than nine creatures. Creatures and objects within the dome when you cast this spell can move through it freely. All other creatures and objects are barred from passing through it. Spells and other magical effects can’t extend through the dome or be cast through it. The atmosphere inside the space is comfortable and dry, regardless of the weather outside. Until the spell ends, you can command the interior to become dimly lit or dark. The dome is opaque from the outside, of any color you choose, but it is transparent from the inside."
    )
    shillelagh = Spell(
        name='Shillelagh', character_id=1, level_school="cantrip transmutation", casting_time='1 bonus action', components='V S M (Mistletoe, a shamrock leaf, and a club or quarterstaff', target='The wood of a club or quarterstaff you are holding', range='Touch', duration='1 minute', details="The wood of a club or quarterstaff you are holding is imbued with nature’s power. For the duration, you can use your spellcasting ability instead of Strength for the attack and damage rolls of melee attacks using that weapon, and the weapon’s damage die becomes a d8. The weapon also becomes magical, if it isn’t already. The spell ends if you cast it again or if you let go of the weapon."
    )


    db.session.add(thunderwave)
    db.session.add(leomunds)
    db.session.add(shillelagh)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_spells():
    db.session.execute('TRUNCATE spells RESTART IDENTITY CASCADE;')
    db.session.commit()
