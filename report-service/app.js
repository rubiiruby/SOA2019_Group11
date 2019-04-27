const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const reportController = require('./controllers/reportController')

var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/report', reportController);

module.exports = app
