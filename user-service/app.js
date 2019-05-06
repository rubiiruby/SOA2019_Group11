const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const userController = require("./controllers/userController")
const cors = require("cors")
const client = require('prom-client')
const actuator = require("express-actuator-endpoints")

const actuatorConfig = {
    info: {
        gitInfo: "user-service"
    },
    health: {
        description: "my app desc"
    }
}

app.use('/actuator', actuator(actuatorConfig))
client.collectDefaultMetrics({ timeout: 5000 })

app.use(cors())
app.use((urlencodedParser = bodyParser.urlencoded({ extended: false })))
app.use(bodyParser.json())

app.get('/actuator/prometheus', (request, response) => {
    response.set('Content-Type', client.register.contentType);
    console.log(client.register)
    response.send(client.register.metrics())
})

app.use("/user", userController)

module.exports = app
