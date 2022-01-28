import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createSpell } from '../store/spell';

const NewSpellForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState('')
    const [levelSchool, setLevelSchool] = useState('')
    const [castingTime, setCastingTime] = useState('')
    const [components, setComponents] = useState('')
    const [range, setRange] = useState('')
    const [target, setTarget] = useState('')
    const [duration, setDuration] = useState('')
    const [details, setDetails] = useState('')
    const [errorsArr, setErrorsArr] = useState([])


    const updateName = (e) => setName(e.target.value);
    const updateLevelSchool = (e) => setLevelSchool(e.target.value);
    const updateCastingTime = (e) => setCastingTime(e.target.value);
    const updateComponents = (e) => setComponents(e.target.value);
    const updateRange = (e) => setRange(e.target.value);
    const updateTarget = (e) => setTarget(e.target.value);
    const updateDuration = (e) => setDuration(e.target.value);
    const updateDetails = (e) => setDetails(e.target.value);

    useEffect(() => {
        let errors = [];
        if (name?.length < 1) { errors.push('Your spell needs a name.') }
        if (name?.length > 60) { errors.push("Your spell's name should be less than 60 characters.") }
        if (levelSchool?.length < 1) { errors.push('Your spell needs a spell level') }
        if (levelSchool?.length > 45) { errors.push('The spell level and school must be less than 45 characters') }
        if (castingTime?.length < 1) { errors.push('Your spell needs a casting time.') }
        if (castingTime?.length > 40) { errors.push('The casting time cannot be more than 40 characters') }
        if (components?.length < 1) { errors.push('Your spell needs components.') }
        if (components?.length > 100) { errors.push('Your spell needs less components.') }
        if (range?.length < 1) { errors.push("Your spell needs a range") }
        if (range?.length > 60) { errors.push("Your spell's range must be less than than 60 characters") }
        if (target?.length < 1) { errors.push("Your spell needs a target") }
        if (target?.length > 60) { errors.push("Your spell's target must be less than 60 characters") }
        if (duration?.length < 1) { errors.push('Your spell needs a duration') }
        if (duration?.length > 60) { errors.push('Your spell duration needs to be less than 60 characters') }
        if (details?.length < 1) { errors.push("Your spell needs details") }
        setErrorsArr(errors)
    }, [name, levelSchool, castingTime, components, range, target, duration, details])
    const handleSubmit = async (e) => {
        e.preventDefault();


        const payload = {
            charId: id,
            name,
            levelSchool,
            castingTime,
            components,
            range,
            target,
            duration,
            details
        };

        let newSpell
        if (errorsArr.length === 0) {
            newSpell = await dispatch(createSpell(payload));
        }
        if (newSpell) {
            history.push(`/spells/${id}`)
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
                    placeholder="Spell Level and School of Magic"
                    value={levelSchool}
                    onChange={updateLevelSchool} />
                <input
                    type="text"
                    placeholder="Casting Time"
                    value={castingTime}
                    onChange={updateCastingTime} />
                <input
                    type="text"
                    placeholder="Components"
                    value={components}
                    onChange={updateComponents} />
                <input
                    type="text"
                    placeholder="Range"
                    value={range}
                    onChange={updateRange} />
                <input
                    type="text"
                    placeholder="Target"
                    value={target}
                    onChange={updateTarget} />
                <input
                    type="text"
                    placeholder="Spell Duration"
                    value={duration}
                    onChange={updateDuration} />
                <input
                    type="text"
                    placeholder="Details"
                    value={details}
                    onChange={updateDetails} />
                <button className="button" onClick={handleSubmit}>Create Spell</button>
            </form>
        </div>
    )
};

export default NewSpellForm;
