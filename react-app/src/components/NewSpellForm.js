import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createSpell } from '../store/spell';

const NewSpellForm = () => {
    const {id} = useParams()
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


    const updateName = (e) => setName(e.target.value);
    const updateLevelSchool = (e) => setLevelSchool(e.target.value);
    const updateCastingTime = (e) => setCastingTime(e.target.value);
    const updateComponents = (e) => setComponents(e.target.value);
    const updateRange = (e) => setRange(e.target.value);
    const updateTarget = (e) => setTarget(e.target.value);
    const updateDuration = (e) => setDuration(e.target.value);
    const updateDetails = (e) => setDetails(e.target.value);
    

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
        
        let newSpell = await dispatch(createSpell(payload));
        if (newSpell) {
          history.push(`/spells/${id}`)
        }
    };

    return (
        <div className='form'>
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
            <button onClick={handleSubmit}>Create Spell</button>
        </div>
    )
};

export default NewSpellForm;
