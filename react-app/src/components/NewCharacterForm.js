import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createCharacter } from '../store/character';

const NewCharacterForm = () => {
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.session.user);

    const [name, setName] = useState('')
    const [characterClass, setCharacterClass] = useState('ranger')
    const [race, setRace] = useState('human')
    const [level, setLevel] = useState()
    const [speed, setSpeed] = useState()
    const [armorClass, setArmorClass] = useState()
    const [health, setHealth] = useState()
    const [init, setInit] = useState()
    const [hitDice, setHitDice] = useState()
    const [strength, setStrength] = useState()
    const [wisdom, setWisdom] = useState()
    const [constitution, setConstitution] = useState()
    const [intelligence, setIntelligence] = useState()
    const [dexterity, setDexterity] = useState()
    const [charisma, setCharisma] = useState()
    const [spellSave, setSpellSave] = useState()
    const [spellMod, setSpellMod] = useState()


    const updateClass = (e) => setCharacterClass(e.target.value);
    const updateRace = (e) => setRace(e.target.value);
    const updateName = (e) => setName(e.target.value);
    const updateLevel = (e) => setLevel(e.target.value);
    const updateSpeed = (e) => setSpeed(e.target.value);
    const updateArmorClass = (e) => setArmorClass(e.target.value);
    const updateHealth = (e) => setHealth(e.target.value);
    const updateInit = (e) => setInit(e.target.value);
    const updateHitDice = (e) => setHitDice(e.target.value);
    const updateStrength = (e) => setStrength(e.target.value);
    const updateWisdom = (e) => setWisdom(e.target.value);
    const updateConstitution = (e) => setConstitution(e.target.value);
    const updateIntelligence = (e) => setIntelligence(e.target.value);
    const updateDexterity = (e) => setDexterity(e.target.value);
    const updateCharisma = (e) => setCharisma(e.target.value);
    const updateSpellSave = (e) => setSpellSave(e.target.value);
    const updateSpellMod = (e) => setSpellMod(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const payload = {
            userId: user.id,
            name,
            characterClass,
            race,
            level,
            speed,
            armorClass,
            health,
            init,
            hitDice,
            strength,
            wisdom,
            constitution,
            intelligence,
            dexterity,
            charisma,
            spellSave,
            spellMod
        };
        
        let newCharacter = await dispatch(createCharacter(payload));
        console.log(newCharacter)
        if (newCharacter) {
          history.push('/')
        }
      };

    return (
        <div className='forms'>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={updateName} />
            <label for='class'>Class</label>
            <select id='class' onChange={updateClass} value={characterClass}>
                <option value="ranger">Ranger</option>
                <option value='rogue'>Rogue</option>
                <option value='fighter'>Fighter</option>
            </select>
            <label for='race'>Race</label>
            <select id='race' onChange={updateRace} value={race}>
                <option value="human">Human</option>
                <option value='elf'>Elf</option>
                <option value='dwarf'>Dwarf</option>
            </select>
            <input
                type="number"
                placeholder="Level"
                value={level}
                onChange={updateLevel} />
            <input
                type="number"
                placeholder="Speed"
                value={speed}
                onChange={updateSpeed} />
            <input
               type="number"
               placeholder="Armor Class"
               value={armorClass}
               onChange={updateArmorClass} />
            <input
               type="number"
               placeholder="Health"
               value={health}
               onChange={updateHealth} />
            <input
               type="text"
               placeholder="Initiative"
               value={init}
               onChange={updateInit} />
            <input
               type="text"
               placeholder="Hit Dice"
               value={hitDice}
               onChange={updateHitDice} />
            <input
               type="number"
               placeholder="Strength"
               value={strength}
               onChange={updateStrength} />
            <input
               type="number"
               placeholder="Wisdom"
               value={wisdom}
               onChange={updateWisdom} />
            <input
               type="number"
               placeholder="Constitution"
               value={constitution}
               onChange={updateConstitution} />
            <input
               type="number"
               placeholder="Intelligence"
               value={intelligence}
               onChange={updateIntelligence} />
            <input
               type="number"
               placeholder="Dexterity"
               value={dexterity}
               onChange={updateDexterity} />
            <input
               type="number"
               placeholder="Charisma"
               value={charisma}
               onChange={updateCharisma} />
            <input
               type="number"
               placeholder="Spell Save DC"
               value={spellSave}
               onChange={updateSpellSave} />
            <input
               type="text"
               placeholder="Spell Attack Modifier"
               value={spellMod}
               onChange={updateSpellMod} />
            <button className="button" onClick={handleSubmit}>Create Character</button>
        </div>
    )
};

export default NewCharacterForm;
