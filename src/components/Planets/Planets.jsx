import React from 'react';

import { Planet } from '../Planet/Planet';
import PropTypes from 'prop-types';

import './Planets.scss';

export function Planets({ planets, getUrl }) {
  return (
    <div className="planets">
      { planets.map(planet => <Planet planet={planet} getUrl={getUrl} key={planet.id} />) }
    </div>
  );
}

Planets.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape),
  getUrl: PropTypes.func.isRequired,
}
