const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Thoughts extends Model {};

Thoughts.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'thoughts'
    }
);

module.exports = Thoughts;