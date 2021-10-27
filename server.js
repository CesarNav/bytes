require('dotenv').config()
const app = require('./app')
const connectDb = require('./database')
const { appConfig, dbConfig } = require('./config')


// Dont start the server till the database is connected
async function initApp (appConfig, dbConfig) {
    try {
        connectDb(dbConfig)
        app.listen(appConfig.port, () => console.log(`Sever on ${appConfig.port}`))
    } catch (e) {
        console.error(e)
        process.exit(0)
    }
    
}

initApp(appConfig, dbConfig)