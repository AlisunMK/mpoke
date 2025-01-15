import React from 'react';
import '../styles/Card.css';

function Cards({ name, image, types }) {
  return (
    <div className='cardContainer'>
      <img src={image} alt={name} className="pokemonImage" width={120} height={120}/>
      <p>{name}</p>
      <div className="types">
        {types.map((type, index) => (
          <span key={index} className={`type ${type}`}>
            {type}{index < types.length - 1 && ', '}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Cards;
