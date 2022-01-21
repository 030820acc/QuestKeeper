import React from 'react';

const CharacterCard = ({char}) => {
  return (
    <div className='card'>
        <h2>{char.name}</h2>
        <p>{char.class}</p>
        <p>level: {char.level}</p>
    </div>
  )
};

export default CharacterCard;
