import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEmployees, deleteEmployee } from '../store/actions/employeeActions'
import { useHistory } from 'react-router-dom'
import { deleteConfirmation, successAlert } from '../helpers/swalHelpers'

const EmployeeList = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getEmployees())
  }, [dispatch])

  const { employee } = useSelector(state => state)
  const { employees, isLoading, isError, flashMessage } = employee

  const handleDelete = (employeeId) => {
    deleteConfirmation("Are you sure you want to delete this? You won't be able to revert this!")
      .then(({ isConfirmed }) => {
        if (isConfirmed) {
          dispatch(deleteEmployee(employeeId))
          successAlert(flashMessage)
        }
      })
  }

  if (isError) {
    return (
      <>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1>There is an error.</h1>
            </div>
          </div>
        </div>
      </>
    )
  }
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id Karyawan</th>
            <th scope="col">Nama Karyawan</th>
            <th scope="col">Nomor Telepon</th>
            <th scope="col">Alamat Karyawan</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            isLoading
              ? <tr>
                  <td colSpan="5">Loading ...</td>
                </tr>
              : employees.length
                ? employees?.map(employee => {
                    return (
                      <tr key={employee.Id_Kary}>
                        <th>
                          { employee.Id_Kary }
                        </th>
                        <td>
                          <div onClick={() => {
                            history.push(`/employees/${employee.Id_Kary}`)
                          }} className="btn">
                            <u>{ employee.Nama_Kary }</u>
                          </div>
                        </td>
                        <td>
                          <a href={`https://api.whatsapp.com/send/?phone=${employee.No_Telp}`} target="__blank">
                            { employee.No_Telp }
                          </a>
                        </td>
                        <td>{ employee.Alamat_Kary }</td>
                        <td>
                          <button className="btn btn-warning me-3" onClick={() => history.push(`/employees/${employee.Id_Kary}/edit`)}>
                            Edit
                          </button>
                          <button className="btn btn-danger" onClick={ () => handleDelete(employee.Id_Kary) }>
                            Delete
                          </button>
                        </td>
                      </tr>
                    )
                  })
                : <tr>
                    <td colSpan="5">No Data</td>
                  </tr>
          }
        </tbody>
      </table>
    </>
  )
}

export default EmployeeList
