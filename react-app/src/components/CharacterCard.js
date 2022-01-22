import React from 'react';
import { useHistory } from 'react-router-dom';

const CharacterCard = ({ char }) => {
    const history = useHistory()
    
    return (
        <div className='card' onClick={() => {
            history.push(`/characters/${char.id}`)
        }}>
            <h2>{char.name}</h2>
            <p>{char.class}</p>
            <p>level: {char.level}</p>
        </div>
    )
};

export default CharacterCard;
