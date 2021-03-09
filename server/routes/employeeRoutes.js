const router = require('express').Router()
const EmployeeController = require('../controllers/EmployeeController')

router.get('/', EmployeeController.getEmployees)
router.post('/', EmployeeController.addEmployee)
router.get('/:id', EmployeeController.getEmployeeById)
router.put('/:id', EmployeeController.editEmployeeById)
router.delete('/:id', EmployeeController.deleteEmployeeByID)

module.exports = router