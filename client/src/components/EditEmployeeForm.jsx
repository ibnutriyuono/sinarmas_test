import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { editEmployee } from '../store/actions/employeeActions'
import { useHistory } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const EditEmployeeForm = ({ employee }) => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [form, setForm] = useState({})
  const { employeeId } = useParams()
  
  const handleOnChange = (e) => {
    setForm({ 
      ...form,
      [e.target.name]: e.target.value 
    })
  }

  const handleFormSubmit = (e) => {
    e.preventDefault()
    dispatch(editEmployee(form, employeeId, history))
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">Nama Karyawan:</label>
          <input type="text" className="form-control" id="nameInput" name="Nama_Kary" placeholder="Nama Karyawan" onChange={handleOnChange} defaultValue={employee.Nama_Kary}/>
        </div>
        <div className="mb-3">
          <label htmlFor="addressInput" className="form-label">Alamat Karyawan:</label>
          <input type="text" className="form-control" id="addressInput" name="Alamat_Kary" placeholder="Alamat Karyawan" onChange={handleOnChange} defaultValue={employee.Alamat_Kary}/>
        </div>
        <div className="mb-3">
          <label htmlFor="rtInput" className="form-label">RT:</label>
          <input type="number" className="form-control" id="rtInput" name="RT" placeholder="RT" onChange={handleOnChange} defaultValue={employee.RT}/>
        </div>
        <div className="mb-3">
          <label htmlFor="rwInput" className="form-label">RW:</label>
          <input type="number" className="form-control" id="rwInput" name="RW" placeholder="RW" onChange={handleOnChange} defaultValue={employee.RW}/>
        </div>
        <div className="mb-3">
          <label htmlFor="kecamatanInput" className="form-label">Kecamatan:</label>
          <input type="text" className="form-control" id="kecamatanInput" name="Kecamatan" placeholder="Kecamatan" onChange={handleOnChange} defaultValue={employee.Kecamatan}/>
        </div>
        <div className="mb-3">
          <label htmlFor="kelurahanInput" className="form-label">Kelurahan:</label>
          <input type="text" className="form-control" id="kelurahanInput" name="Kelurahan" placeholder="Kelurahan" onChange={handleOnChange} defaultValue={employee.Kelurahan}/>
        </div>
        <div className="mb-3">
          <label htmlFor="telephoneInput" className="form-label">Nomor Telephone:</label>
          <input type="number" className="form-control" id="telephoneInput" name="No_Telp" placeholder="Nomor Telephone Karyawan" onChange={handleOnChange} defaultValue={employee.No_Telp}/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default EditEmployeeForm
