export default (sequelize, DataTypes) => {
    const CampaignReport = sequelize.define('CampaignReport', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        visitor: DataTypes.INTEGER,
        voted: DataTypes.INTEGER,
    })

    CampaignReport.associate = function(models) {
        models.CampaignReport.hasMany(models.CandidateReport, {foreignKey: 'campaignReportId'})
    }
    
    return CampaignReport
}