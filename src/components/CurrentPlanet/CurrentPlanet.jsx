import React from 'react';

import './CurrentPlanet.scss';

export function CurrentPlanet({ currentPlanet }) {
  console.log(currentPlanet);
  const {
    name,
    diameter,
    climate,
    gravity,
    terrain,
    population,
    rotationPeriod,
    residents,
    img,
    summary
    
  } = currentPlanet;

  return (
    <div className="info">
      <div className="info__options">
        
        <div className="info__photo">
          <img className="info__img" src={`${img}`} alt="planet" />
        </div>

        <ul className="info__details">
          <li className="info__detail">{name}</li>
          <li className="info__detail">Diamentr: {diameter}</li>
          <li className="info__detail">Climate: {climate}</li>
          <li className="info__detail">Gravity: {gravity}</li>
          <li className="info__detail">Terrain: {terrain}</li>
          <li className="info__detail">Population: {population}</li>
          <li className="info__detail">Rotation Period: {rotationPeriod}</li>
          <li className="info__detail">Residents: {residents}</li>
        </ul>
      </div>
  
      <div className="info__summary">
        <p className="info__text">
          {summary}
        </p>
      </div>
    </div>
  )
}