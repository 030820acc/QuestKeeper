from flask import Blueprint, jsonify, request
from app.models import db, Item

items = Blueprint('items', __name__)

# GET 
@items.route('/<char_id>')
def get_all_items (char_id):
    items = Item.query.filter_by(character_id=char_id).all()

    return jsonify([item.to_dict() for item in items])


# POST
@items.route('/', methods=['POST'])
def create_item():
    payload = request.json

    new_item = Item(
        name=payload['name'],
        character_id=payload['charId'], 
        quantity=payload['quantity']
    )

    db.session.add(new_item)
    db.session.commit()

    return jsonify(new_item.to_dict())

# PUT
@items.route('/<item_id>', methods=['PUT'])
def edit_item(item_id):
    item = Item.query.filter_by(id=item_id).one()
    payload= request.json

    item.name=payload['name'],
    item.quantity=payload['quantity']
    db.session.commit()

    return jsonify(item.to_dict())

# DELETE
@items.route('/<id>', methods=['DELETE'])
def delete_item(id):
    item = Item.query.filter_by(id=id).one()
    db.session.delete(item)
    db.session.commit()

    return id