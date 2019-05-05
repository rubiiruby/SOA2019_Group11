const app = require('./app')
const Eureka = require('eureka-js-client').Eureka;

// example configuration
const client = new Eureka({
    instance: {
        app: 'jqservice',
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: 'http://localhost:5000/info',
        port: {
            '$': 8080,
            '@enabled': 'true',
        },
        vipAddress: 'jq.test.something.com',
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        host: 'localhost',
        port: 8761,
        servicePath: '/eureka/apps/'
    },
})

client.start((error) => {
    console.log(error || 'complete');
})
process.on('exit', () => { client.stop()})
process.on('SIGINT', () => { client.stop()})

app.listen(5000, () => {console.log('App listening on port 5000')})