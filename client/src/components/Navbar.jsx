import React from 'react'
import { NavLink } from 'react-router-dom'
import { debounce } from 'lodash'
import { filterEmployee } from '../store/actions/employeeActions'
import { useDispatch } from 'react-redux'

function Navbar() {
  const dispatch = useDispatch()
  const handleOnChange = debounce((e) => {
    dispatch(filterEmployee(e.target.value))
  }, 500)
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <div>
          <NavLink to="/" className="navbar-brand">Dashboard</NavLink>
          <NavLink to="/create-employee" className="navbar-brand">Tambah Karyawan</NavLink>
        </div>
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search Employee"
            aria-label="Search"
            onChange={handleOnChange}
            />
        </form>
      </div>
    </nav>
  )
}

export default Navbar
