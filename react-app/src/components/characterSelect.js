import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getAllCharacters } from '../store/character';
import CharacterCard from './CharacterCard';
import { NavLink } from 'react-router-dom';

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
                <p>Choose a character to see their sheet or create a new one.</p>
                <NavLink id="new-button" to='/characters/new'>+</NavLink>
            </div>
            {charArr?.map((char) => {
                return (
                    <CharacterCard key={char.id} char={char}/>
                )
            })}
        </div>
    )
};

export default CharacterSelect
