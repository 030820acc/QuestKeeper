import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createWeapon } from '../store/weapon';

const NewWeaponForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState('')
    const [dmgDice, setDmgDice] = useState('')
    const [keywords, setKeywords] = useState('')
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
            charId: id,
            name: name,
            dmgDice: dmgDice,
            keywords: keywords
        };

        let newWeapon
        if (errorsArr.length === 0) {
            newWeapon = await dispatch(createWeapon(payload));
        }
        if (newWeapon) {
            history.push(`/weapons/${id}`)
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
                <button className="button" onClick={handleSubmit}>Create Weapon</button>
            </form>
        </div>
    )
};

export default NewWeaponForm;
