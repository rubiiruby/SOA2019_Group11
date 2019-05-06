// const express = require("express")
import express from 'express';
import bodyParser from 'body-parser';
import campaignController from './src/controllers/campaignController'
import cors from 'cors'
import actuator from 'express-actuator'
import client from 'prom-client'

const app = express()
client.collectDefaultMetrics();

app.use(actuator('/actuator'));
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// ...
app.get('/actuator/metrics', (request, response) => {
    response.set('Content-Type', client.register.contentType);
    console.log(client.register)
    response.send(client.register.metrics());
});

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
