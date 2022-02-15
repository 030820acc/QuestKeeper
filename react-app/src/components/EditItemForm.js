import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { updateItem } from '../store/item';

const EditItemForm = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const history = useHistory()
    const item = useSelector((state) => state.items[id])

    const [name, setName] = useState(item?.name)
    const [quantity, setQuantity] = useState(item?.quantity)
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
            name: name,
            quantity: quantity
        };

        let newItem
        if (errorsArr.length === 0) {
            newItem = await dispatch(updateItem(payload, item.id));
        }
        if (newItem) {
            history.push(`/items/${item.character_id}`)
        }
    };

    return (
        <div>
            <ul>
                {errorsArr.map((error) => {
                    return (<li className='error'>{error}</li>)
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
                <button className="button" onClick={handleSubmit}>Update Item</button>
            </form>
        </div>
    )
};

export default EditItemForm;
