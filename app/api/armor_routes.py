from flask import Blueprint, jsonify, request
from app.models import db, Armor

armors = Blueprint('armors', __name__)

# GET 
@armors.route('/<char_id>')
def get_all_armors (char_id):
    armors = Armor.query.filter_by(character_id=char_id).all()

    return jsonify([armor.to_dict() for armor in armors])


# POST
@armors.route('/', methods=['POST'])
def create_armor():
    payload = request.json
    if payload['stealthDisadvantage'] == 'true':
        stealth = True
    else:
        stealth = False

    new_armor = Armor(
        name=payload['name'],
        character_id=payload['charId'], 
        stealth_disadvantage=stealth
    )

    db.session.add(new_armor)
    db.session.commit()

    return jsonify(new_armor.to_dict())

# PUT
@armors.route('/<armor_id>', methods=['PUT'])
def edit_armor(armor_id):
    armor = Armor.query.filter_by(id=armor_id).one()
    payload= request.json
    if payload['stealthDisadvantage'] == 'true':
        stealth = True
    else:
        stealth = False

    armor.name=payload['name'],
    armor.stealth_disadvantage=stealth
    db.session.commit()

    return jsonify(armor.to_dict())

# DELETE
@armors.route('/<id>', methods=['DELETE'])
def delete_armor(id):
    armor = Armor.query.filter_by(id=id).one()
    db.session.delete(armor)
    db.session.commit()

    return id