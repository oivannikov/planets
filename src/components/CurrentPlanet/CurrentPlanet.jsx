import React from 'react';

import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

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
          <li className="info__detail">Population: {population}</li>
          <li className="info__detail">Rotation Period: {rotationPeriod}</li>
          <li className="info__detail">Residents: {residents}</li>
        </ul>
      </div>

      <div className="info__terrain">

        <div className="info__terrain-heading">
          <h3>Terrain: </h3>
        </div>

        <div className="info__content">
          <NavLink className="info__come-back" to="/">&#171;</NavLink>
          <p className="info__terrain-text">{terrain}</p>  
        </div>
      </div>
    </div>
  );
}

CurrentPlanet.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string.isRequired,
    climate: PropTypes.string.isRequired,
    population: PropTypes.string,
    id: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
    diameter: PropTypes.string,
    gravity: PropTypes.string.isRequired,
    terrain: PropTypes.string.isRequired,
    rotationPeriod: PropTypes.string.isRequired,
    residents: PropTypes.string,
  }).isRequired
}
