export default (sequelize, DataTypes) => {
    const Voter = sequelize.define('Voter', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: DataTypes.STRING
    })

    Voter.associate = function(models) {
        models.Voter.belongsTo(models.Campaign, {foreignKey: 'campaignId'})
    }

    return Voter
}