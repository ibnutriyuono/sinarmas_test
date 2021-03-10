import axios from 'axios'

export const getEmployees = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: true
      })
      dispatch({
        type: 'SET_IS_FLASHMESSAGE',
        payload: ''
      })
      const { data } = await axios({
        method: 'GET',
        baseURL: 'https://sinarmas-backend.herokuapp.com/employees'
      })
      dispatch({
        type: 'FETCH_EMPLOYEES',
        payload: data
      })
    } catch (error) {
      dispatch({
        type: 'SET_IS_ERROR',
        payload: error
      })
    } finally {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: false
      })
    }
  }
}

export const getEmployee = (employeeId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: true
      })
      dispatch({
        type: 'SET_IS_FLASHMESSAGE',
        payload: ""
      })
      const { data } = await axios({
        method: 'GET',
        baseURL: `https://sinarmas-backend.herokuapp.com/employees/${employeeId}`
      })
      dispatch({
        type: 'FETCH_EMPLOYEE',
        payload: data
      })
    } catch (error) {
      dispatch({
        type: 'SET_IS_ERROR',
        payload: error
      })
    } finally {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: false
      })
    }
  }
}

export const createEmployee = (payload, history) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: true
      })
      const { Nama_Kary, Alamat_Kary, RT, RW, Kecamatan, Kelurahan, No_Telp } = payload
      const dataInput = {
        Nama_Kary,
        Alamat_Kary,
        RT,
        RW,
        Kecamatan,
        Kelurahan,
        No_Telp,
        Input_date: new Date(),
        Input_by: 1,
        Approve_date: new Date(),
        Approve_By: 2
      }
      const { data } = await axios({
        method: 'POST',
        baseURL: 'https://sinarmas-backend.herokuapp.com/employees',
        data: dataInput
      })
      history.push('/')
    } catch (error) {
      dispatch({
        type: 'SET_IS_ERROR',
        payload: error
      })
    } finally {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: false
      })
    }
  }
}

export const deleteEmployee = (employeeId) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: true
      })
      const { data } = await axios({
        method: 'DELETE',
        baseURL: `https://sinarmas-backend.herokuapp.com/employees/${employeeId}`
      })
      dispatch({
        type: 'SET_IS_FLASHMESSAGE',
        payload: data.message
      })
      dispatch(getEmployees())
    } catch (error) {
      dispatch({
        type: 'SET_IS_ERROR',
        payload: error
      })
    } finally {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: false
      })
    }
  }
}

export const filterEmployee = (employeeName) => {
  return async (dispatch) => {
    if (employeeName === '') {
      dispatch(getEmployees())
    } else {
      dispatch({
        type: 'FILTER_EMPLOYEE',
        payload: employeeName
      })
    }
  }
}

export const editEmployee = (payload, employeeId, history) => {
  return async (dispatch) => {
    try {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: true
      })
      const { data } = await axios({
        method: 'PUT',
        baseURL: `https://sinarmas-backend.herokuapp.com/employees/${employeeId}`,
        data: payload
      })
      history.push('/')
    } catch (error) {
      dispatch({
        type: 'SET_IS_ERROR',
        payload: error
      })
    } finally {
      dispatch({
        type: 'SET_IS_LOADING',
        payload: false
      })
    }
  }
}