import app from './app'
import Eureka from 'eureka-js-client'
import config from './src/config/env'

const { node_port } = config

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

// client.logger.level('debug');
client.start((error) => {
    console.log(error || 'complete');
})
process.on('exit', () => { 
    client.stop()
    process.exit()
})
process.on('SIGINT', () => {
    client.stop((err) => {
        if ( err != null ) {
            console.log(err)
        }
        process.exit()
    })
})

app.listen(node_port, () => {console.log(`App listening on port ${node_port}`)})