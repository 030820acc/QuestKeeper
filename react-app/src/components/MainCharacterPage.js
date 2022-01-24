import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import HealthWidget from './HealthWidget';
import { getAllCharacters } from '../store/character';


const MainCharacterPage = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const characters = useSelector((state) => state.characters)
    const user = useSelector((state) => state.session.user)
    const char = characters[id]

    useEffect(() => {
        dispatch(getAllCharacters(user.id))
    }, []);
    

    return (
        <div className="Main-grid"> 
            <div className="top-line">
                <HealthWidget charId={char.id}/>
                <div className="card">
                    
                </div>
            </div>
            <div className="bottom-line">
                <div className="card">
                    <h2 className="name">Thunderwave</h2>
                    <p className="card-details">Details details details details details. Details details details
                        details.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default MainCharacterPage;
