const {DataTypes} = require('sequelize');
const db = require('../db/conn');

const Address = db.define('Address', {
    street: {
        type: DataTypes.STRING,
        allowNull: false
    },
    number: {   
        type: DataTypes.STRING,
        allowNull: false
    },
    city: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Address;