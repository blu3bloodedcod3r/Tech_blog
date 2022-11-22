const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt')

class User extends Model {
    checkPassword(pw) {
        return bcrypt.compareSync(pw, this.password)
    }
};

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            foreignKey: true,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            onDelete: true,
            validate: {
                len: [4]
            }
        }
    },
    {
        hooks: {
            beforeCreate: async (newData) => {
                newData.password = await bcrypt.hash(newData.password, 10)
                return newData;
            },
            beforeUpdate: async (updatedData) => {
                updatedData.password = await bcrypt.hash(updatedData.password, 10)
                return updatedData;
            }
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User'
    },
);

// const userData = async () => {
//    const users = await User.bulkCreate(userData, {
//         individualHooks: true,
//         return: true
// })
// };

// console.log(users);

module.exports = User;