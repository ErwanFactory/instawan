import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FiltersManager from './components/FiltersManager/FiltersManager';

const App = () => {
  return (
    <Router>
      <Route
        path='/'
        render={({ history }) => {
          return <FiltersManager history={history} />;
        }}
      />
    </Router>
  );
}

export default App;
