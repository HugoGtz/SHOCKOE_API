'use strict';
module.exports = (sequelize, DataTypes) => {
    const Task = sequelize.define('Task', {
        description: DataTypes.STRING,
        due_date: DataTypes.DATE,
        completed: DataTypes.BOOLEAN,
        name: DataTypes.STRING,
        userId: {
            type: DataTypes.INTEGER,
            references: {
                model: 'User',
                key: 'id'
            }
        },
    }, {});
    Task.associate = function(models) {
        Task.belongsTo(models.User, {
            foreignKey: 'userId'
        });
    };
    return Task;
}