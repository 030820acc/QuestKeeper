import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateCharacter } from '../store/character';


const EditCharacterForm = () => {
    const {id} = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.session.user);
    const char = useSelector((state) => state.characters[id])


    const [name, setName] = useState(char.name)
    const [characterClass, setCharacterClass] = useState(char.class)
    const [race, setRace] = useState(char.race)
    const [level, setLevel] = useState(char.level)
    const [speed, setSpeed] = useState(char.speed)
    const [armorClass, setArmorClass] = useState(char.armor_class)
    const [health, setHealth] = useState(char.health)
    const [init, setInit] = useState(char.init)
    const [hitDice, setHitDice] = useState(char.hit_dice)
    const [strength, setStrength] = useState(char.strength)
    const [wisdom, setWisdom] = useState(char.wisdom)
    const [constitution, setConstitution] = useState(char.constitution)
    const [intelligence, setIntelligence] = useState(char.intelligence)
    const [dexterity, setDexterity] = useState(char.dexterity)
    const [charisma, setCharisma] = useState(char.charisma)
    const [spellSave, setSpellSave] = useState(char.spell_save)
    const [spellMod, setSpellMod] = useState(char.spell_mod)


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
        
        let editedCharacter = await dispatch(updateCharacter(payload, id));
        if (editedCharacter) {
          history.push('/')
        }
      };

    return (
        <div className='form'>
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
            <button onClick={handleSubmit}>Create Character</button>
        </div>
    )
};

export default EditCharacterForm;
