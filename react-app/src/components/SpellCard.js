import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteSpell } from '../store/spell';

const SpellCard = ({spell}) => {
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <div className='card'>
            <div>
                <h2 className="name">{spell?.name}</h2>
                <p>{spell?.level_school}</p>
                <p>Casting time: {spell?.casting_time}</p>
                <p>Components: {spell?.components}</p>
                <p>Range: {spell?.range}</p>
                <p>Target: {spell?.target}</p>
                <p>Duration: {spell?.duration}</p>
                <p>{spell?.details}</p>
            </div>
            <div>
                <button className='button2' onClick={(e) => {
                    e.preventDefault()
                    history.push(`/spells/edit/${spell?.id}`)
                }}>edit</button>
                <button className='button2' onClick={(e) => {
                    e.preventDefault()
                    alert("Are you sure you want to delete?")
                    dispatch(deleteSpell(spell?.id))
                }}>delete</button>
            </div>
        </div>
    )
};

export default SpellCard;