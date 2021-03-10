import React from 'react'
import EmployeeData from '../components/EmployeeData'

const EmployeeDetails = () => {
  return (
    <div className="container">
      <div className="row">
        <h1 className="mt-3">DETAILS</h1>
        <div className="col-md-12 mt-3">
          <EmployeeData />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDetails
