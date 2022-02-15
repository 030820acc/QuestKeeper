import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createArmor } from '../store/armor';

const NewArmorForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState('')
    const [stealthDisadvantage, setStealthDisadvantage] = useState('false')
    const [errorsArr, setErrorsArr] = useState([])


    const updateName = (e) => setName(e.target.value);
    const updateStealthDisadvantage = (e) => setStealthDisadvantage(e.target.value);

    useEffect(() => {
        let errors = [];
        if (name?.length < 1) { errors.push('Your armor needs a name.') }
        if (name?.length > 60) { errors.push('Your armor needs a shorter name.') }
        setErrorsArr(errors)
    }, [name])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            charId: id,
            name: name,
            stealthDisadvantage: stealthDisadvantage
        };

        let newArmor
        if (errorsArr.length === 0) {
            newArmor = await dispatch(createArmor(payload));
        }
        if (newArmor) {
            history.push(`/armors/${id}`) //change link inventory/armors/id
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
                <label for='stealth'>Stealth Disadvantage</label>
                <select id='stealth' onChange={updateStealthDisadvantage} value={stealthDisadvantage}>
                    <option value={'true'}>Yes</option>
                    <option value={'false'}>No</option>
                </select>
                <button className="button" onClick={handleSubmit}>Create Armor</button>
            </form>
        </div>
    )
};

export default NewArmorForm;
