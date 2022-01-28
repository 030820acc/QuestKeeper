import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import WeaponCard from './WeaponCard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllWeapons } from '../store/weapon';
import { NavLink } from 'react-router-dom';

const WeaponPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const weapons = useSelector((state) => state.weapons)
    const weaponArr = Object.values(weapons)

    useEffect(() => {
        dispatch(getAllWeapons(id))
    }, [dispatch, id]);

    return (
        <div className="card-grid">
            <div className="new-button-card">
                <p>Here you can see weapons in more detail or you can create a new one.</p>
                <NavLink id="new-button" to={`/weapons/new/${id}`}>+</NavLink>
            </div>
            {weaponArr?.map((weapon) => {
                return (
                    <WeaponCard key={weapon.id} weapon={weapon}/>
                )
            })}
        </div>
    )
};

export default WeaponPage;
