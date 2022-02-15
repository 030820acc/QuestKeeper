import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ArmorCard from './ArmorCard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllArmors } from '../store/armor';
import { NavLink } from 'react-router-dom';

const ArmorPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const armors = useSelector((state) => state.armors)
    const armorArr = Object.values(armors)

    useEffect(() => {
        dispatch(getAllArmors(id))
    }, [dispatch, id]);

    return (
        <div className="card-grid">
            <div className="new-button-card">
                <p>Here you can see armors in more detail or you can create a new one.</p>
                <NavLink id="new-button" to={`/armors/new/${id}`}>+</NavLink>
            </div>
            {armorArr?.map((armor) => {
                return (
                    <ArmorCard key={armor.id} armor={armor}/>
                )
            })}
        </div>
    )
};

export default ArmorPage;
