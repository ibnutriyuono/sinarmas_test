'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Mst_Karyawan', {
      Id_Kary: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Nama_Kary: {
        type: Sequelize.STRING
      },
      Alamat_Kary: {
        type: Sequelize.STRING
      },
      RT: {
        type: Sequelize.STRING
      },
      RW: {
        type: Sequelize.STRING
      },
      Kecamatan: {
        type: Sequelize.STRING
      },
      Kelurahan: {
        type: Sequelize.STRING
      },
      No_Telp: {
        type: Sequelize.STRING
      },
      Input_date: {
        type: Sequelize.DATE
      },
      Input_by: {
        type: Sequelize.STRING
      },
      Approve_date: {
        type: Sequelize.DATE
      },
      Approve_By: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Mst_Karyawan');
  }
};