const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const mongoose = require('mongoose')

require("dotenv").config()

mongoose.connect(
    process.env.MONGODB_URI || `mongodb://localhost/todo`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    err => {
        console.log('Connected to DB')
        console.log(err)
    }
)

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`)
})