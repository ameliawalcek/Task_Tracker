const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const mongoose = require('mongoose')

require("dotenv").config()
const { DB_URL, PORT } = process.env
mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost/todo`, { useNewUrlParser: true, useUnifiedTopology: true })
// mongoose.connect(
//   DB_URL,
//   { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
//   err => {
//     console.log('Connected to DB')
//     console.log(err)
//   }
// )

app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', api)

app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is up on port ${PORT}`)
})