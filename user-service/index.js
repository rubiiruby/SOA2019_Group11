const express = require("express")
const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())

app.use('/user', require('./routes/auth'));

app.listen(5000, () => {})
