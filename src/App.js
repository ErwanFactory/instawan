import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import FiltersManager from './components/FiltersManager/FiltersManager';

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <React.Fragment>
          <Route
            path='/'
            render={({ history }) => {
              return <FiltersManager history={history} />;
            }}
          />
        </React.Fragment>
      </Router>
    </React.Fragment>
  );
}

export default App;
