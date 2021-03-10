import React, { useEffect } from 'react'
import EditEmployeeForm from '../components/EditEmployeeForm'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployee } from '../store/actions/employeeActions'
import { useParams } from 'react-router-dom'

const EditEmployee = () => {
  const { employeeId } = useParams()
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getEmployee(employeeId))
  }, [dispatch, employeeId])

  const { employee: data} = useSelector(state => state)
  const { employee, isLoading } = data

  if (isLoading) {
    return (
      <div className='container'>
      <div className='row'> 
        <div className="col-md-12 mt-3">
          <h1>Loading ...</h1>
        </div>
      </div>
    </div>
    )
  }


  return (
    <div className='container'>
      <div className='row'> 
      <h1 className="mt-3">Edit Karyawan Baru</h1>
        <div className="col-md-12 mt-3">
          <EditEmployeeForm employee={employee} />
        </div>
      </div>
    </div>
  )
}

export default EditEmployee
