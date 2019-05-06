import app from './app'
import Eureka from 'eureka-js-client'
import config from './config/env'
import models from './models'

const { node_port } = config

const initDatabase = async () => {
    await models.CampaignReport.sync()
    await models.CandidateReport.sync()
}
initDatabase()


// example configuration
const client = new Eureka({
    instance: {
        app: config.app_name,
        hostName: 'localhost',
        ipAddr: '127.0.0.1',
        statusPageUrl: `http://${config.app_name}:${config.node_port}/actuator/info`,
        port: {
            '$': config.node_port,
            '@enabled': 'true',
        },
        vipAddress: config.app_name,
        dataCenterInfo: {
            '@class': 'com.netflix.appinfo.InstanceInfo$DefaultDataCenterInfo',
            name: 'MyOwn',
        },
    },
    eureka: {
        host: config.Eureka_HOST,
        port: config.Eureka_PORT,
        servicePath: '/eureka/apps/'
    }
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