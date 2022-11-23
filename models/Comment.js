const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {};

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            foreignKey: true,
            allowNull: false
        },
        blog_post: {
            type: DataTypes.INTEGER,
            allowNull: false,
            foreignKey: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            onDelete: true,
            onUpdate: "CASCADE"
        }
    },
    {
        sequelize,
        timestamps: true,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);

module.exports = Comment;