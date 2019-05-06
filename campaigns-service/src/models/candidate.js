export default (sequelize, DataTypes) => {
    const Candidate = sequelize.define('Candidate', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        imageURL: DataTypes.STRING,
        title: DataTypes.STRING,
        detail: DataTypes.TEXT,
        voteAmount: DataTypes.INTEGER
    })

    Candidate.associate = function(models) {
        models.Candidate.belongsTo(models.Campaign, {foreignKey: 'campaignId'})
    }
    
    return Candidate
}