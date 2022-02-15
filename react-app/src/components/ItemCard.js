import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteItem } from '../store/item';

const ItemCard = ({item}) => {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div className='card'>
            <div>
                <h2 className="name">{item?.name}</h2>
                <p>Quantity: {item?.quantity}</p>
            </div>
            <div>
                <button className='button2' onClick={(e) => {
                    e.preventDefault()
                    history.push(`/items/edit/${item?.id}`)
                }}>edit</button>
                <button className='button2' onClick={(e) => {
                    e.preventDefault()
                    alert("Are you sure you want to delete?")
                    dispatch(deleteItem(item?.id))
                }}>delete</button>
            </div>
        </div>
    )
};

export default ItemCard;
