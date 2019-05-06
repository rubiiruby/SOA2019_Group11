export default (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        uid: DataTypes.STRING
    })

    User.associate = function(models) {
        models.User.hasMany(models.Campaign, {foreignKey: 'userId'})
    }

    return User
}