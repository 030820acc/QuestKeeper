from flask import Blueprint, jsonify, request
from app.models import db, Character

characters = Blueprint('characters', __name__)

# GET 
@characters.route('/<user_id>')
def get_all_characters(user_id):
    chars = Character.query.filter_by(user_id=user_id).all()

    return jsonify([char.to_dict() for char in chars])


# POST
@characters.route('/', methods=['POST'])
def create_character():
    character_payload = request.json

    new_character = Character(
        name=character_payload['name'],
        user_id=character_payload['userId'],
        character_class=character_payload['characterClass'],
        race=character_payload['race'],
        level=character_payload['level'],
        speed=character_payload['speed'],
        armor_class=character_payload['armorClass'],
        health=character_payload['health'],
        init=character_payload['init'],
        hit_dice=character_payload['hitDice'],
        strength=character_payload['strength'],
        wisdom=character_payload['wisdom'],
        intelligence=character_payload['intelligence'],
        charisma=character_payload['charisma'],
        constitution=character_payload['constitution'],
        dexterity=character_payload['dexterity'],
        spell_save=character_payload['spellSave'],
        spell_mod=character_payload['spellMod']
    )

    db.session.add(new_character)
    db.session.commit()

    return jsonify(new_character.to_dict())

# PUT
@characters.route('/<id>', methods=['PUT'])
def edit_character(id):
    char = Character.query.filter_by(id=id).one()
    character_payload= request.json

    char.name=character_payload['name']
    char.user_id=character_payload['userId']
    char.character_class=character_payload['characterClass'],
    char.race=character_payload['race']
    char.level=character_payload['level']
    char.speed=character_payload['speed']
    char.armor_class=character_payload['armorClass']
    char.health=character_payload['health']
    char.init=character_payload['init']
    char.hit_dice=character_payload['hitDice']
    char.strength=character_payload['strength']
    char.wisdom=character_payload['wisdom']
    char.intelligence=character_payload['intelligence']
    char.charisma=character_payload['charisma']
    char.constitution=character_payload['constitution']
    char.dexterity=character_payload['dexterity']
    char.spell_save=character_payload['spellSave']
    char.spell_mod=character_payload['spellMod']
    db.session.commit()

    return jsonify(char.to_dict())

# DELETE
@characters.route('/<id>', methods=['DELETE'])
def delete_character(id):
    char = Character.query.filter_by(id=id).one()
    db.session.delete(char)
    db.session.commit()

    return id