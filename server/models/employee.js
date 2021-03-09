'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Employee.init({
    Id_Kary: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    Nama_Kary: DataTypes.STRING,
    Alamat_Kary: DataTypes.STRING,
    RT: DataTypes.STRING,
    RW: DataTypes.STRING,
    Kecamatan: DataTypes.STRING,
    Kelurahan: DataTypes.STRING,
    No_Telp: DataTypes.STRING,
    Input_date: DataTypes.DATE,
    Input_by: DataTypes.STRING,
    Approve_date: DataTypes.DATE,
    Approve_By: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Employee',
    tableName: 'Mst_Karyawan'
  });
  return Employee;
};