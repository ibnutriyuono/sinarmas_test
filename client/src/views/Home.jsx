import React from 'react'
import EmployeeList from '../components/EmployeeList'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <div className="mt-3">
              <h1>List Karyawan</h1>
              <EmployeeList />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
