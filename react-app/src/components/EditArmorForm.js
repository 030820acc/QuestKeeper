import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateArmor } from '../store/armor';

const EditArmorForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const armor = useSelector((state) => state.armors[id])

    const [name, setName] = useState(armor?.name)
    const [stealthDisadvantage, setStealthDisadvantage] = useState(armor?.stealth_disadvantage)
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
            name: name,
            stealthDisadvantage: stealthDisadvantage
        };

        let newArmor
        if (errorsArr.length === 0) {
            newArmor = await dispatch(updateArmor(payload, armor.id));
        }
        if (newArmor) {
            history.push(`/armors/${armor.character_id}`)
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
                    <option value={"true"}>Yes</option>
                    <option value={"false"}>No</option>
                </select>
                <button className="button" onClick={handleSubmit}>Update Armor</button>
            </form>
        </div>
    )
};

export default EditArmorForm;