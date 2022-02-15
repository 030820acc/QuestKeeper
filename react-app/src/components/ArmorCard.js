import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteArmor } from '../store/armor';

const ArmorCard = ({armor}) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const stealthfunc = (stealthBool) => {
        if (stealthBool) return 'yes'
        if (!stealthBool) return 'no'
    }

    return (
        <div className='card'>
            <div>
                <h2 className="name">{armor?.name}</h2>
                <p>Stealth Disadvantage: {stealthfunc(armor?.stealth_disadvantage)}</p>
            </div>
            <div>
                <button className='button2' onClick={(e) => {
                    e.preventDefault()
                    history.push(`/armors/edit/${armor?.id}`)
                }}>edit</button>
                <button className='button2' onClick={(e) => {
                    e.preventDefault()
                    alert("Are you sure you want to delete?")
                    dispatch(deleteArmor(armor?.id))
                }}>delete</button>
            </div>
        </div>
    )
};

export default ArmorCard;
