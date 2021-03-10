import Swal from 'sweetalert2'

const dataFoundAlert = (data) => {
  Swal.fire({
    title: 'Success!',
    text: `${data.length} results`,
    icon: 'success',
    toast: true,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    position: 'top'
  })
}

const errorAlert = (errors) => {
  Swal.fire({
    title: 'Whoops!',
    text: errors,
    icon: 'error',
    toast: true,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    position: 'top'
  })
}

const successAlert = (message) => {
  Swal.fire({
    title: 'Success!',
    text: message,
    icon: 'success',
    toast: true,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    position: 'top'
  })
}

const deleteConfirmation = (message) => {
  return Swal.fire({
    title: 'Are you sure?',
    text: message,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  })
}

export {
  dataFoundAlert,
  errorAlert,
  successAlert,
  deleteConfirmation
}
