from flask import Blueprint, jsonify, request
from app.models import db, Weapon

weapons = Blueprint('weapons', __name__)

# GET 
@weapons.route('/<char_id>')
def get_all_weapons(char_id):
    weapons = Weapon.query.filter_by(character_id=char_id).all()

    return jsonify([weapon.to_dict() for weapon in weapons])


# POST
@weapons.route('/', methods=['POST'])
def create_weapon():
    payload = request.json

    new_weapon = Weapon(
        name=payload['name'],
        character_id=payload['charId'],
        dmg_dice=payload['dmgDice'],
        keywords=payload['keywords']
    )

    db.session.add(new_weapon)
    db.session.commit()

    return jsonify(new_weapon.to_dict())

# PUT
@weapons.route('/<weapon_id>', methods=['PUT'])
def edit_weapon(weapon_id):
    weapon = Weapon.query.filter_by(id=weapon_id).one()
    payload= request.json

    weapon.name=payload['name']
    weapon.dmg_dice=payload['dmgDice']
    weapon.keywords=payload['keywords']
    db.session.commit()

    return jsonify(weapon.to_dict())

# DELETE
@weapons.route('/<id>', methods=['DELETE'])
def delete_weapon(id):
    weapon = Weapon.query.filter_by(id=id).one()
    db.session.delete(weapon)
    db.session.commit()

    return id