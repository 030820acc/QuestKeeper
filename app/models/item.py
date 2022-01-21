from .db import db

class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    character_id = db.Column(db.Integer, db.ForeignKey("characters.id"), nullable=False)
    quantity = db.Column(db.Integer, nullable=False)
    

    def to_dict(self):
        return {
            'id': self.id,
            'character_id': self.character_id,
            'name': self.name,
            'quantity': self.quantity
        }