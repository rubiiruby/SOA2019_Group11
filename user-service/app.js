const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const userController = require('./controllers/userController')

var jsonParser = bodyParser.json()
app.use(urlencodedParser = bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use('/user', userController);

module.exports = app
