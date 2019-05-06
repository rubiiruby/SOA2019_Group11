export default (sequelize, DataTypes) => {
    const CampaignImage = sequelize.define('CampaignImage', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        }, 
        imageURL: DataTypes.STRING
    })

    CampaignImage.associate = function(models) {
        models.CampaignImage.belongsTo(models.Campaign, {foreignKey: 'campaignId'})
    }

    return CampaignImage
}