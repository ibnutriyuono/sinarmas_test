import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployee } from '../store/actions/employeeActions'
import { useParams } from 'react-router-dom'
import { parseDate, parseAddress } from '../helpers/parseEmployeeData'

const EmployeeData = () => {
  const dispatch = useDispatch()
  const { employeeId } = useParams()
  useEffect(() => {
    dispatch(getEmployee(employeeId))
  }, [dispatch, employeeId])
  const { employee: data} = useSelector(state => state)
  const { employee, isLoading } = data
  if (isLoading) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mt-3">
            <h1>Loading ...</h1>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          { employee.Nama_Kary }
        </h5>
        <h6 className="card-subtitle mb-2 text-muted">
          { employee.No_Telp }
        </h6>
        <p className="card-text">
          Alamat: { parseAddress(employee.Alamat_Kary, employee.RT, employee.RW, employee.Kecamatan, employee.Kelurahan) }
        </p>
      </div>
      <div className="card-footer text-center">
        Input Date: { parseDate(employee.Input_date) }
      </div>
    </div>
  )
}

export default EmployeeData
