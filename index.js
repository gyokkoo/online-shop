const port = 3500
const config = require('./config/config')
const database = require('./config/database.config')
const express = require('express')

let app = express()
let environment = process.env.NODE_ENV || 'development'

database(config[environment])
app.listen(port)

console.log(`Node.js server running on port ${port}`)
