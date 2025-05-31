const { DataTypes } = require('sequelize');
const { v4: uuidv4 } = require('uuid');

const Account = (sequelize) =>
    sequelize.define('Account', {
        accountId: { 
            type: DataTypes.STRING, 
            defaultValue: uuidv4, 
            unique: true 
        },
        email: { 
            type: DataTypes.STRING, 
            allowNull: false, 
            unique: true 
        },
        accountName: { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        appSecretToken: { 
            type: DataTypes.STRING, 
            defaultValue: uuidv4 
        },
        website: { 
            type: DataTypes.STRING 
        }
    });

module.exports = Account