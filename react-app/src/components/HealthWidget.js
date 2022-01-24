import React, { useState } from 'react';
import { useSelector } from 'react-redux';


const HealthWidget = ({id}) => {
    const char = useSelector((state) => state.characters)
    console.log(char)
    // const char = characters[charId]

    return (
        <div className='card'>
            <h2 className="name">{char[id]?.name}</h2>
            <p>{char.class} level: {char[id]?.level}</p>
            <h2 className="name">HP: {char[id]?.health}</h2>
        </div>
    )
};

export default HealthWidget;
