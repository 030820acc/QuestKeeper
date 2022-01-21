from .db import db

class Weapon(db.Model):
    __tablename__ = 'weapons'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    character_id = db.Column(db.Integer, db.ForeignKey("characters.id"), nullable=False)
    dmg_dice = db.Column(db.String, nullable=False)
    keywords = db.Column(db.String, nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'character_id': self.character_id,
            'name': self.name,
            'dmg_dice': self.dmg_dice,
            'keywords': self.keywords
        }