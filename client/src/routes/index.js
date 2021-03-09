import React from 'react'
import {
  Home,
  CreateEmployee
} from '../views'
import Navbar from '../components/Navbar'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'


const RouteConfig = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create-employee">
            <CreateEmployee />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default RouteConfig