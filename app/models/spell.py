from .db import db

class Spell(db.Model):
    __tablename__ = 'spells'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60), nullable=False)
    character_id = db.Column(db.Integer, db.ForeignKey("characters.id"), nullable=False)
    level_school = db.Column(db.String(45), nullable=False)
    casting_time = db.Column(db.String(40), nullable=False)
    components = db.Column(db.String, nullable=False)
    range = db.Column(db.String, nullable=False)
    target = db.Column(db.String, nullable=False)
    duration = db.Column(db.String, nullable=False)
    details = db.Column(db.Text, nullable=False)


    def to_dict(self):
        return {
            'id': self.id,
            'character_id': self.character_id,
            'name': self.name,
            'level_school': self.level_school,
            'casting_time': self.casting_time,
            'components': self.components,
            'range':self.range,
            'target': self.target,
            'duration': self.duration,
            'details': self.details
        }