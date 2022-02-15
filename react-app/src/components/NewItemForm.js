import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { createItem } from '../store/item';

const NewItemForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()

    const [name, setName] = useState('')
    const [quantity, setQuantity] = useState('')
    const [errorsArr, setErrorsArr] = useState([])


    const updateName = (e) => setName(e.target.value);
    const updateQuantity = (e) => setQuantity(e.target.value);

    useEffect(() => {
        let errors = [];
        if (name?.length < 1) { errors.push('Your item needs a name.') }
        if (name?.length > 60) { errors.push('Your item needs a shorter name.') }
        setErrorsArr(errors)
    }, [name])


    const handleSubmit = async (e) => {
        e.preventDefault();

        const payload = {
            charId: id,
            name: name,
            quantity: quantity
        };

        let newItem
        if (errorsArr.length === 0) {
            newItem = await dispatch(createItem(payload));
        }
        if (newItem) {
            history.push(`/items/${id}`) //change link inventory/items/id
        }
    };

    return (
        <div>
            <ul>
                {errorsArr.map((error) => {
                    return (<li className='error' key='error'>{error}</li>)
                })}
            </ul>
            <form className='forms'>
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={updateName} />
                <input
                    type="number"
                    placeholder="Quantity"
                    value={quantity}
                    onChange={updateQuantity} />
                <button className="button" onClick={handleSubmit}>Create Item</button>
            </form>
        </div>
    )
};

export default NewItemForm;
