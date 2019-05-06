// const express = require("express")
import express from 'express';
import bodyParser from 'body-parser';
import campaignController from './controllers/campaignController'
import cors from 'cors'
import client from 'prom-client'
import actuator from "express-actuator-endpoints";
import config from './config/env'
import fs from 'fs'
import jwt from 'express-jwt'

const app = express()

const actuatorConfig = {
    info: {
        gitInfo: config.app_name
    },
    health: {
        description: config.app_desc
    }
}

app.use('/actuator', actuator(actuatorConfig))
client.collectDefaultMetrics({ timeout: 5000 })

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// ...
app.get('/actuator/prometheus', (request, response) => {
    response.set('Content-Type', client.register.contentType)
    console.log(client.register)
    response.send(client.register.metrics())
})

const secret = fs.readFileSync('credentials/secret.key')

// app.use(jwt({ secret: secret, requestProperty: 'jti' }))

// app.use((err, req, res, next) => {
//     console.log(req)
//     if (err.name === 'UnauthorizedError') {
//         res.status(401).send('invalid token...');
//     }
// })

app.use("/campaign", campaignController)

// handle open circuit event
app.use((err, req, res, next) => {
    if (err && err.message === 'OpenCircuitError') {
        res.status(500).end('Circuit is open');
        return;
    }
    // continue to the next error handler
    next(err);
})

module.exports = app
