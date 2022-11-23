const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class BlogPost extends Model {};

BlogPost.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        post_title: {
            type: DataTypes.STRING,
            allowNull: false,
            onUpdate: "CASCADE"
        },
        contents: {
            type: DataTypes.STRING,
            allowNull: false,
            onDelete: true,
            onUpdate: "CASCADE"
        },
        username: {
            type: DataTypes.STRING,
            primaryKey: true,
            foreignKey: true,
            allowNull: false
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            onUpdate: "CASCADE"
        },
        comment: {
            type: DataTypes.STRING,
            foreignKey: true,
            references: {
                model: 'comment',
                key: 'id' 
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'BlogPost'
    }
);

module.exports = BlogPost;