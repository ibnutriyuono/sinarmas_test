const initialState = {
  employees: [],
  employee: {},
  isLoading: false,
  isError: null,
  flashMessage: ""
}

const employeeReducer = (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case 'SET_IS_LOADING':
      return {
        ...state,
        isLoading: payload
      }
    case 'SET_IS_ERROR':
      return {
        ...state,
        isError: payload
      } 
    case 'SET_IS_FLASHMESSAGE':
      return {
        ...state,
        flashMessage: payload
      }  
    case 'FETCH_EMPLOYEES':
      return {
        ...state,
        employees: payload
      } 
    case 'FETCH_EMPLOYEE':
      return {
        ...state,
        employee: payload
      }
    case 'FILTER_EMPLOYEE':
      const filtered = state.employees.filter(e => e.Nama_Kary === payload)
      return {
        ...state,
        employees: filtered
      }
    default:
      return state
  }
}

export default employeeReducer