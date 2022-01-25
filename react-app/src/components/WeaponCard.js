import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteWeapon } from '../store/weapon';

const WeaponCard = ({weapon}) => {
    const { id } = useParams()
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div className='card'>
            <div>
                <h2 className="name">{weapon?.name}</h2>
                <p>{weapon?.dmg_dice}</p>
                <p>{weapon?.keywords}</p>
            </div>
            <div>
                <button className='button2' onClick={(e) => {
                    e.preventDefault()
                    history.push(`/weapons/edit/${weapon?.id}`)
                }}>edit</button>
                <button className='button2' onClick={(e) => {
                    e.preventDefault()
                    alert("Are you sure you want to delete?")
                    dispatch(deleteWeapon(weapon?.id))
                }}>delete</button>
            </div>
        </div>
    )
};

export default WeaponCard;
