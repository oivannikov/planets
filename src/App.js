import React, {useState} from 'react';

import { Route, Switch } from 'react-router-dom';
import planets from './api/planets.json';

import { CurrentPlanet } from './components/CurrentPlanet/CurrentPlanet';
import { Planets } from './components/Planets/Planets';

import './App.scss';

function App() {
  const [currentPlanet, setCurrentPlanet] = useState({});

  function getUrl(id) {
    const currentPlanet = planets.find(planet => planet.id === id);

    setCurrentPlanet(currentPlanet);
  }

  return (
    <main className="main">
      <Switch>
        <Route
          path="/"
          component={() => <Planets planets={planets} getUrl={getUrl} /> }
          exact
        />
        <Route
          path="/planets/:planetId"
          component={() => <CurrentPlanet currentPlanet={currentPlanet} /> }
        />
      </Switch>

      <div className="main__substrate" />
    </main>
  );
}

export default App;
