import React from 'react'
import EmployeeForm from '../components/EmployeeForm'

const CreateEmployee = () => {
  return (
    <div className='container'>
      <div className='row'> 
      <h1 className="mt-3">Tambah Karyawan Baru</h1>
        <div className="col-md-12 mt-3">
          <EmployeeForm />
        </div>
      </div>
    </div>
  )
}

export default CreateEmployee
