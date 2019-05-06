export default (sequelize, DataTypes) => {
    const Campaign = sequelize.define('Campaign', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: DataTypes.STRING,
        detail: DataTypes.TEXT,
        expiredDate: DataTypes.STRING
    })

    Campaign.associate = function(models) {
        models.Campaign.hasMany(models.CampaignImage, {foreignKey: 'campaignId'})
        models.Campaign.hasMany(models.Candidate, {foreignKey: 'campaignId'})
        models.Campaign.hasMany(models.Voter, {foreignKey: 'campaignId'})
        models.Campaign.belongsTo(models.User, {foreignKey: 'userId'})
    }
    
    return Campaign
}