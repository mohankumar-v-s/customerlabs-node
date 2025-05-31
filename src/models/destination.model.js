const { DataTypes } = require('sequelize');

module.exports = (sequelize) =>
  sequelize.define('Destination', {
    url: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    method: { 
      type: DataTypes.ENUM('GET', 'POST', 'PUT'), 
      allowNull: false 
    },
    headers: { 
      type: DataTypes.JSON, 
      allowNull: false 
    }
  });
