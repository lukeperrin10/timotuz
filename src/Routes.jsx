import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from './components/App'
import IndexView from './views/IndexView'

const Routes = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
      <Route
          exact
          path="/"
          render={() => <Redirect to='/start'/>}
        />
        <Route
          exact
          path="/start"
          render={() => <App component={<IndexView />} />}
        />
        <Route
          exact
          path="/fastigheter"
          render={() => <App component={<></>} />}
        />
        <Route 
          exact 
          path="/om_oss" 
          render={() => <App component={<></>} />}
        />
        <Route
          exact
          path="/kontakta_oss"
          render={() => <App component={<></>} />}
        />
      </Switch>
    </Router>
  )
}

export default Routes
