export default (sequelize, DataTypes) => {
    const CandidateReport = sequelize.define('CandidateReport', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        score: DataTypes.INTEGER
    })

    CandidateReport.associate = function(models) {
        models.CandidateReport.belongsTo(models.CampaignReport, {foreignKey: 'campaignReportId'})
    }
    
    return CandidateReport
}