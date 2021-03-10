import React from 'react'
import {
  Home,
  CreateEmployee,
  EmployeeDetails,
  EditEmployee
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
          <Route path="/employees/:employeeId/edit">
            <EditEmployee />
          </Route>
          <Route path="/employees/:employeeId">
            <EmployeeDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default RouteConfig