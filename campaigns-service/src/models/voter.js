export default (sequelize, DataTypes) => {
    const Voter = sequelize.define('Voter', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }
    })

    Voter.associate = function(models) {
        models.Voter.belongsTo(models.Campaign, {foreignKey: 'campaignId'})
        models.Voter.belongsTo(models.User, {foreignKey: 'userId'})
    }

    return Voter
}