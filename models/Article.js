const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Article extends Model {};

Article.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        author: {
            type: DataTypes.STRING
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'article'
    }
);

module.exports = Article;