import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { deleteCharacter } from '../store/character';

const CharacterCard = ({ char }) => {
    const history = useHistory()
    const dispatch = useDispatch()
    
    return (
        <div className='card' onClick={() => {
            history.push(`/characters/${char.id}`)
        }}>
            <h2 className="name">{char.name}</h2>
            <p>{char.class}</p>
            <p>level: {char.level}</p>
            <button>edit</button>
            <button onClick={(e) => {
                e.preventDefault()
                alert("Are you sure you want to delete?")
                dispatch(deleteCharacter(char.id))
            }}>delete</button>
        </div>
    )
};

export default CharacterCard;
