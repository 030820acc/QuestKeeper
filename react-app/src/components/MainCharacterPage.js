import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HealthWidget from './HealthWidget';
import { getAllCharacters } from '../store/character';
import StatWidget from './StatWidget';
import { getAllWeapons } from '../store/weapon';
import WeaponWidget from './WeaponWidget';


const MainCharacterPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.session.user)
    const char = useSelector((state) => state.characters[id])
    const weapons = useSelector((state) => state.weapons)
    const weaponArr = Object.values(weapons)

    useEffect(() => {
        dispatch(getAllWeapons(id))
    }, [dispatch, id]);


    useEffect(() => {
        dispatch(getAllCharacters(user.id))
    }, [dispatch, user.id]);
    

    return (
        <div className="Main-grid"> 
            <div className="top-line">
                <HealthWidget id={char?.id}/>
                <StatWidget id={char?.id} />
            </div>
            <div className="bottom-line">
                <div className="card">
                    <h2 className="name">Weapons</h2>
                    {weaponArr?.map((weapon) => {
                        return (
                            <WeaponWidget key={weapon.id} weapon={weapon} />
                        )
                    })}
                </div>
            </div>
        </div>
    );
};

export default MainCharacterPage;
