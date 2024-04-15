// App.js
// import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';

// import { Switch, Route } from 'react-router-dom';

import WeatherPage from './components/WeatherPage';
import CitiesTable from './components/CitiesTable';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={CitiesTable} />
          <Route path="/weather/:cityId" component={WeatherPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
