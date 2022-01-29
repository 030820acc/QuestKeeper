from .db import db

class Character(db.Model):
    __tablename__ = 'characters'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(45), nullable=False)
    character_class = db.Column(db.String(45), nullable=False)
    race = db.Column(db.String(20), nullable=False)
    level = db.Column(db.Integer, nullable=False)
    speed = db.Column(db.Integer, nullable=False)
    armor_class = db.Column(db.Integer, nullable=False)
    health = db.Column(db.Integer, nullable=False)
    init = db.Column(db.String, nullable=False)
    hit_dice = db.Column(db.String, nullable=False)
    strength = db.Column(db.Integer, nullable=False)
    wisdom = db.Column(db.Integer, nullable=False)
    constitution = db.Column(db.Integer, nullable=False)
    intelligence = db.Column(db.Integer, nullable=False)
    dexterity = db.Column(db.Integer, nullable=False)
    charisma = db.Column(db.Integer, nullable=False)
    spell_save = db.Column(db.Integer, nullable=False)
    spell_mod = db.Column(db.String, nullable=False)
    
    spells = db.relationship('Spell', cascade='all, delete')
    weapons = db.relationship('Weapon', cascade='all, delete')
    items = db.relationship('Item', cascade='all, delete')
    armors = db.relationship('Armor', cascade='all, delete')

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'name': self.name,
            'class': self.character_class,
            'race': self.race,
            'level': self.level,
            'speed':self.speed,
            'armor_class': self.armor_class,
            'health': self.health,
            'init': self.init,
            'hit_dice': self.hit_dice,
            'strength': self.strength,
            'wisdom': self.wisdom,
            'constitution': self.constitution,
            'intelligence': self.intelligence,
            'dexterity': self.dexterity,
            'charisma': self.charisma,
            'spell_save': self.spell_save,
            'spell_mod': self.spell_mod
        }
