const mongoose = require('mongoose')
const { Schema } = mongoose;

// Defines sale's data structure
const saleSchema = new Schema({
    saleID : { type: Number, required: true },
    clientID : { type: Number, required: true},
    clientName : { type: String, required: true}
});

// Export schema as a model
module.exports = mongoose.model('Sale', saleSchema);