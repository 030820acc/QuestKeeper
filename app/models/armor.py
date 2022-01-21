from .db import db

class Armor(db.Model):
    __tablename__ = 'armors'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    character_id = db.Column(db.Integer, db.ForeignKey("characters.id"), nullable=False)
    stealth_disadvantage = db.Column(db.Boolean, nullable=False)
    


    def to_dict(self):
        return {
            'id': self.id,
            'character_id': self.character_id,
            'name': self.name,
            'stealth_disadvantage': self.stealth_disadvantage,
        }