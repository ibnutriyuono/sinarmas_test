const { Employee } = require('../models')

class EmployeeController {

  static async getEmployees (req, res, next) {
    try {
      const employeeData = await Employee.findAll()
      res.status(200).json(employeeData)
    } catch (error) {
      next(error)
    }
  }  

  static async addEmployee (req, res, next) {
    try {
      const { 
        Nama_Kary, 
        Alamat_Kary, 
        RT, 
        RW, 
        Kecamatan, 
        Kelurahan,
        No_Telp, 
        Input_date, 
        Input_by, 
        Approve_date, 
        Approve_By 
      } = req.body

      const employee = await Employee.create({
        Nama_Kary,
        Alamat_Kary,
        RT,
        RW,
        Kecamatan,
        Kelurahan,
        No_Telp,
        Input_date,
        Input_by,
        Approve_date,
        Approve_By
      })
      res.status(200).json(employee)
    } catch (error) {
      console.log(error)
      next(error)
    }
  }

  static async getEmployeeById (req, res, next) {
    try {
      const { id } = req.params
      const employee = await Employee.findOne({
        where: {
          Id_Kary: id
        }
      })
      if (!employee) {
        next({ name: 'NoData' })
      } else {
        res.status(200).json(employee)
      }
    } catch (error) {
      next(error)
    }
  }

  static async editEmployeeById (req, res, next) {
    try {
      const { id } = req.params
      const { 
        Nama_Kary, 
        Alamat_Kary, 
        RT, 
        RW, 
        Kecamatan, 
        Kelurahan,
        No_Telp, 
        Input_date, 
        Input_by, 
        Approve_date, 
        Approve_By 
      } = req.body
      const employee = await Employee.update({
        Nama_Kary,
        Alamat_Kary,
        RT,
        RW,
        Kecamatan,
        Kelurahan,
        No_Telp,
        Input_date,
        Input_by,
        Approve_date,
        Approve_By
      }, {
        where: {
          Id_Kary: id
        },
        returning: true
      })
      if (employee[0] === 1) {
        res.status(200).json(employee[1][0])
      } else if (employee[0] === 0){
        next({ name: 'NoData' })
      }
    } catch (error) {
      next(error)
    }
  }

  static async deleteEmployeeByID (req, res, next) {
    try {
      const { id } = req.params
      const employee = await Employee.destroy({
        where: {
          Id_Kary: id
        }
      })
      if(employee){
        res.status(200).json({
          message: 'Employee deleted successfull'
        })
      } else {
        next({ name: 'NoData' })
      }
    } catch (err) {
      next(err)
    }
  }
}

module.exports = EmployeeController