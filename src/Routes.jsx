import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import App from './Components/App';
import IndexView from './Views/IndexView'

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