import React from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemCard from './ItemCard';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getAllItems } from '../store/item';
import { NavLink } from 'react-router-dom';

const ItemPage = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const items = useSelector((state) => state.items)
    const itemArr = Object.values(items)

    useEffect(() => {
        dispatch(getAllItems(id))
    }, [dispatch, id]);

    return (
        <div className="card-grid">
            <div className="new-button-card">
                <p>Here you can see items in more detail or you can create a new one.</p>
                <NavLink id="new-button" to={`/items/new/${id}`}>+</NavLink>
            </div>
            {itemArr?.map((item) => {
                return (
                    <ItemCard key={item.id} item={item}/>
                )
            })}
        </div>
    )
};

export default ItemPage;
