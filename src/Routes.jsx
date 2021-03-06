import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'
import App from './components/App'
import IndexView from './views/IndexView'
import PropertiesView from './views/PropertiesView'
import ContactUsView from './views/ContactUsView'
import AboutUsView from './views/AboutUsView'

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/hem" />} />
        <Route
          exact
          path="/hem"
          render={() => <App component={<IndexView />} />}
        />
        <Route
          exact
          path="/fastigheter"
          render={() => <App component={<PropertiesView />} />}
        />
        <Route
        exact
        path="/om_oss"
        render={() => <App component={<AboutUsView />} />}
        >
        </Route>
        <Route
          exact
          path="/kontakt"
          render={() => <App component={<ContactUsView />} />}
        />
      </Switch>
    </Router>
  )
}

export default Routes
