import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCharacters } from '../store/character';
import CharacterCard from './CharacterCard';

const CharacterSelect = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user);
    const characters = useSelector((state) => state.characters)
    const charArr = Object.values(characters)

    useEffect(() => {
      dispatch(getAllCharacters(user.id))
    }, [dispatch, user]);
    

    return (
        <div className="card-grid">
            <div className="new-button-card">
                <button onClick={(e) => {
                    e.preventDefault()
                    
                }}>+</button>
            </div>
            {charArr.map((char) => {
                return (
                    <CharacterCard key={char.id} char={char}/>
                )
            })}
        </div>
    )
};

export default CharacterSelect
