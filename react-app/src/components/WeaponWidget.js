import React from "react";


const WeaponWidget = ({weapon}) => {

    return (
        <div>
            <h2 className='name'>{weapon?.name}</h2>
            <p>{weapon?.dmg_dice}</p>
            <p>{weapon?.keywords}</p>
        </div>
    )
};

export default WeaponWidget;