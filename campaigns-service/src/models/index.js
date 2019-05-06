const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
import config from '../config/env'

const db = {}
const basename = path.basename(__filename)
const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = config
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: 'mysql',
    logging: false,
    pool: {
        max: 20,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

fs
.readdirSync(__dirname)
.filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js')
})
.forEach(file => {
    let model = sequelize['import'](path.join(__dirname, file))
    db[model.name] = model
})

Object.keys(db).forEach(modelName => {
    if (db[modelName].associate) {
        db[modelName].associate(db)
    }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

export default db