import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const HealthWidget = ({charId}) => {
    const characters = useSelector((state) => state.characters)
    const char = characters[charId]
    
    return (
        <div className='card'>
            <h2 className="name">{char.name}</h2>
            <p>{char.class} level: {char.level}</p>
            <h2>HP: {char.health}</h2>
        </div>
    )
};

export default HealthWidget;
