import React from 'react';

import { NavLink } from 'react-router-dom';

import './Planet.scss';

export function Planet({ planet, getUrl }) {
  const { name, climate, population, id, img} = planet;
  
  return (
    <div className="planet">
      <div className="planet__photo">
        <img className="planet__img" src={img} alt="planet"/>
      </div>

      <div className="planet__info">
        <p className="planet__name">{name}</p>
        <p className="planet__climate">Climate: {climate}</p>
        <p className="planet__population">Population: {population}</p>
        <NavLink
          className="planet__more"
          onClick={() => getUrl(id)}
          to={`/planets/${name}`}
        >
          Read more...
        </NavLink>
      </div>
    </div>
  )
}
