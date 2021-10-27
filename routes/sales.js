const express = require('express')
const { addSale, getSales } = require('../controllers/saleController')
const api = express.Router()

api.post('/sales', addSale)
api.get('/sales', getSales)

module.exports = api