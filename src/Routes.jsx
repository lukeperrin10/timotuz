import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './components/App';
import IndexView from './views/IndexView'

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route
          exact
          path='/'
          render={() => <App component={<IndexView />} />}
        />
      </Switch>
    </Router>
  );
};

export default Routes