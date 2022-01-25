import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateWeapon } from '../store/weapon';

const EditWeaponForm = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const weapon = useSelector((state) => state.weapons[id])

    const [name, setName] = useState(weapon?.name)
    const [dmgDice, setDmgDice] = useState(weapon?.dmg_dice)
    const [keywords, setKeywords] = useState(weapon?.keywords)


    const updateName = (e) => setName(e.target.value);
    const updateDmgDice = (e) => setDmgDice(e.target.value);
    const updateKeywords = (e) => setKeywords(e.target.value);
    

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const payload = {
            name: name,
            dmgDice: dmgDice,
            keywords: keywords
        };
        
        let newWeapon = await dispatch(updateWeapon(payload, weapon.id));
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
            <button className="button" onClick={handleSubmit}>Update Weapon</button>
        </div>
    )
};

export default EditWeaponForm;
