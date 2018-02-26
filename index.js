const port = 3500
const config = require('./config/config')
const database = require('./config/database.config')
const express = require('express')

let app = express()
let environment = process.env.NODE_environment || 'development'

database(config[environment])
require('./config/express')(app, config[environment])
require('./config/routes')(app)
require('./config/passport')()

app.listen(port)
console.log(`Node.js server running on port ${port}`)
