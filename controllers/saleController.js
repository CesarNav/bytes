const Sales = require('../models/Sales')

async function addSale (req, res) {
    try {
        const {
            id_sale,
            id_customer,
            name
        } = req.body

        const sales = Sales({
            id_sale, 
            id_customer,
            name
        })

        const salesStored = await sales.save()

        res.status(201).send({ salesStored })
    }
    catch (e) {
        res.status(500).send({ message: e.message})
    }
    
}

async function getSales (req, res) {
    const sales = await Sales.find().lean().exec()
    res.status(200).send({ sales })

}

module.exports = {
    addSale,
    getSales
}