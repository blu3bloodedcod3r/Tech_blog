const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class User extends Model {};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        user_name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.ALPHANUMERIC
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user'
    }
);

module.exports = User;