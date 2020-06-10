// init environment variable
const {
    APP_PORT
} = process.env

// init express
const express = require('express')
const app = express()

// // get static routings with views files
// const path = require('path')
// app.use(express.static(path.join(__dirname, 'public')))



console.log('yolo from astro/app.js')



// // auth routings 
// const auth = require('./routes/auth')
// app.use('/', auth)

// // servers routings
// const servers = require('./routes/servers')
// app.use('/server', servers)



app.listen(APP_PORT, () => console.log(`Server running on port ${APP_PORT}`))