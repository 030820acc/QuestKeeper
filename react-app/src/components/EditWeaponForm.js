import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateWeapon } from '../store/weapon';

const EditWeaponForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const weapon = useSelector((state) => state.weapons[id])

    const [name, setName] = useState(weapon?.name)
    const [dmgDice, setDmgDice] = useState(weapon?.dmg_dice)
    const [keywords, setKeywords] = useState(weapon?.keywords)
    const [errorsArr, setErrorsArr] = useState([])


    const updateName = (e) => setName(e.target.value);
    const updateDmgDice = (e) => setDmgDice(e.target.value);
    const updateKeywords = (e) => setKeywords(e.target.value);

    useEffect(() => {
        let errors = [];
        if (name?.length < 1) { errors.push('Your weapon needs a name.') }
        if (name?.length > 60) { errors.push('Your weapon needs a shorter name.') }
        if (dmgDice?.length < 1) { errors.push('Your weapon needs a damage amount') }
        if (dmgDice?.length > 60) { errors.push('Your weapon needs a shorter damage amount') }
        if (keywords?.length < 1) { errors.push("Your weapon needs keywords") }
        if (keywords?.length > 60) { errors.push("Your weapon needs less keywords") }
        setErrorsArr(errors)
    }, [name, dmgDice, keywords])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            name: name,
            dmgDice: dmgDice,
            keywords: keywords
        };

        let newWeapon
        if (errorsArr.length === 0) {
            newWeapon = await dispatch(updateWeapon(payload, weapon.id));
        }
        if (newWeapon) {
            history.push(`/inventory/${weapon.character_id}`)
        }
    };

    return (
        <div>
            <ul>
                {errorsArr.map((error) => {
                    return (<li className='error'>{error}</li>)
                })}
            </ul>
            <form className='forms'>
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
            </form>
        </div>
    )
};

export default EditWeaponForm;
