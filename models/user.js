'use strict';
import hash_password from 'helpers/hash_password'

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        user_name: {
            type: DataTypes.TEXT,
            allowNull: false,
            unique: true
        },
        password: DataTypes.STRING
    }, {});
    
    User.associate = function(models) {
        User.hasMany(models.Task, {
            foreignKey: 'user_id'
        })
    };

    User.addHook('afterValidate', 'hashPassword', (user, options) => {
        user.password = hash_password(user.password)
    });

    return User;
}