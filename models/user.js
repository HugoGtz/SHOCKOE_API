 'use strict';
 import hash_password from 'helpers/hash_password'

 module.exports = (sequelize, DataTypes) => {
     const User = sequelize.define('User', {
         name: DataTypes.STRING,
         username: {
             type: DataTypes.TEXT,
             allowNull: false,
             unique: true
         },
         password: DataTypes.STRING
     }, {
         indexes: [{
             unique: true,
             fields: ['username']
         }]
     });

     User.associate = function(models) {
         User.hasMany(models.Task, {
             foreignKey: 'userId'
         })
     };

     User.addHook('afterValidate', 'hashPassword', (user, options) => {
         user.password = hash_password(user.password)
     });

     return User;
 }