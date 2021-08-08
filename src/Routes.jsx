import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './components/App';
import IndexView from './views/IndexView'
import PropertiesView from './views/PropertiesView'

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact
          path='/'
          render={() => <App component={<IndexView />} />}
        />
        <Route
          exact
          path='/fastigheter'
          render={() => <App component={<PropertiesView />} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes