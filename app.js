// init environment variable
const {
    CONTAINER_APP_PORT
} = process.env

// init express
const express = require('express')
const app = express()

// request body parser
const bodyParser = require('body-parser')
app.use(bodyParser())

// get static routings with views files
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))

// common routings 
const common = require('./routes/common')
app.use('/', common)

app.listen(CONTAINER_APP_PORT, () => console.log(`Server running on port ${CONTAINER_APP_PORT}`))