import React from 'react';
import { useSelector } from 'react-redux';


const HealthWidget = ({id}) => {
    const characters = useSelector((state) => state.characters)
    const char = characters[id]

    return (
        <div className='card'>
            <h2 className="name">{char?.name}</h2>
            <h2 className="name">{char?.class} level: {char?.level}</h2>
            <h2 className="name">HP: {char?.health}</h2>
            <h2 className="name">Speed: {char?.speed}</h2>
            <h2 className="name">Armor Class: {char?.armor_class}</h2>
            <h2 className="name">Initiative: {char?.init}</h2>
        </div>
    )
};

export default HealthWidget;
