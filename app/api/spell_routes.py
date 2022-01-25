from flask import Blueprint, jsonify, request
from app.models import db, Spell

spells = Blueprint('spells', __name__)

# GET 
@spells.route('/<char_id>')
def get_all_spells (char_id):
    spells = Spell.query.filter_by(character_id=char_id).all()

    return jsonify([spell.to_dict() for spell in spells])


# POST
@spells.route('/', methods=['POST'])
def create_spell():
    payload = request.json

    new_spell = Spell(
        name=payload['name'],
        character_id=payload['charId'],
        level_school=payload['levelSchool'],
        casting_time=payload['castingTime'],
        components=payload['components'],
        range=payload['range'],
        target=payload['target'],
        duration=payload['duration'],
        details=payload['details']
    )

    db.session.add(new_spell)
    db.session.commit()

    return jsonify(new_spell.to_dict())

# PUT
@spells.route('/<spell_id>', methods=['PUT'])
def edit_spell(spell_id):
    spell = Spell.query.filter_by(id=spell_id).one()
    payload= request.json

    spell.name=payload['name'],
    spell.character_id=payload['charId'],
    spell.level_school=payload['levelSchool'],
    spell.casting_time=payload['castingTime'],
    spell.components=payload['components'],
    spell.range=payload['range'],
    spell.target=payload['target'],
    spell.duration=payload['duration'],
    spell.details=payload['details']
    db.session.commit()

    return jsonify(spell.to_dict())

# DELETE
@spells.route('/<id>', methods=['DELETE'])
def delete_spell(id):
    spell = Spell.query.filter_by(id=id).one()
    db.session.delete(spell)
    db.session.commit()

    return id