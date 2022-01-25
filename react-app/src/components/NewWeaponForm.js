import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createWeapon } from '../store/weapon';

const NewWeaponForm = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState('')
    const [dmgDice, setDmgDice] = useState('')
    const [keywords, setKeywords] = useState('')


    const updateName = (e) => setName(e.target.value);
    const updateDmgDice = (e) => setDmgDice(e.target.value);
    const updateKeywords = (e) => setKeywords(e.target.value);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const payload = {
            charId: id,
            name: name,
            dmgDice: dmgDice,
            keywords: keywords
        };
        
        let newWeapon = await dispatch(createWeapon(payload));
        if (newWeapon) {
          history.push(`/inventory/${id}`)
        }
    };

    return (
        <div className='forms'>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={updateName} />
            <input
                type="text"
                placeholder="Damage Dice and Type"
                value={dmgDice}
                onChange={updateDmgDice} />
            <input
                type="text"
                placeholder="Keywords"
                value={keywords}
                onChange={updateKeywords} />
            <button className="button" onClick={handleSubmit}>Create Weapon</button>
        </div>
    )
};

export default NewWeaponForm;
