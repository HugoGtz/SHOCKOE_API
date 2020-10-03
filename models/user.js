'use strict';
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        name: DataTypes.STRING,
        user_name: DataTypes.STRING,
        passord: DataTypes.STRING
    }, {});
    User.associate = function(models) {
        User.hasMany(models.Task, {foreignKey: 'user_id'})
    };
    return User;
}