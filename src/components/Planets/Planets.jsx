import React from 'react';

import { Planet } from '../Planet/Planet';

import './Planets.scss';

export function Planets({ planets, getUrl }) {
  return (
    <div className="planets">
      {
        planets.map(planet => <Planet planet={planet} getUrl={getUrl} key={planet.id} />)
      }
    </div>
  )
}