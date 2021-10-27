const mongoose = require('mongoose')

const Schema = mongoose.Schema

const SaleSchema = Schema ({
    id_sale: Number,
    id_customer: Number,
    name: String,
})

module.exports = mongoose.model('Sales', SaleSchema)
