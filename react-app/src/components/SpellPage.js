import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import SpellCard from './SpellCard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllSpells } from '../store/spell';
import { NavLink } from 'react-router-dom';

const SpellPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const spells = useSelector((state) => state.spells)
    const spellArr = Object.values(spells)

    useEffect(() => {
        dispatch(getAllSpells(id))
    }, [dispatch, id]);

    return (
        <div className="card-grid">
            <div className="new-button-card">
                <p>Here you can see spells in more detail or create a new one.</p>
                <NavLink id="new-button" to={`/spells/new/${id}`}>+</NavLink>
            </div>
            {spellArr?.map((spell) => {
                return (
                    <SpellCard key={spell.id} spell={spell}/>
                )
            })}
        </div>
    )
};

export default SpellPage;