const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const trackRoutes = require('./routes/tracks.routes')

const app = express()

//routes
app.use(trackRoutes)

//middle
app.use(morgan('dev'))
app.use(cors())

//sv
app.listen(5000, () => {
    console.log("works")
})
//https://youtu.be/lSCLVwLdSOk?t=1171