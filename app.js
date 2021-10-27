const express = require('express')
const bodyParser = require('body-parser')
const salesRoutes = require('./routes/sales')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1', salesRoutes)

module.exports = app