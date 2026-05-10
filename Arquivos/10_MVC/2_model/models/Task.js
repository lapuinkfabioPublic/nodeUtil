const {DataTypes} = require('sequelize');
const db = require('../db/conn');

const Task = db.define('Task', {

    title: {

        type: DataTypes.STRING,
        allowNull: false
    },

    description: {
        type: DataTypes.STRING,
        allowNull: false
    },

    done: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }   
}); 
module.exports = Task;
