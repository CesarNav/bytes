const express = require('express');
const router = express.Router();

const Sale = require('../models/sales')

// Returns all sales from database
router.get('/', async (req, res) => {
    const sales = await Sale.find();
    res.json(sales);
});

// Returns just one sale by ID from database
router.get('/:id', async (req, res) => {
    const sale = await Sale.findById(req.params.id);
    res.json(sale);

});

// Add sales to database
router.post('/', async (req, res) => {
    const { saleID, clientID, clientName } = req.body;
    const sale = new Sale({ saleID, clientID, clientName })
    await sale.save()
    res.json({status: 'Sale saved'});
})

// Update sales from database
router.put('/:id', async (req, res) => {
    const { saleID, clientID, clientName } = req.body;
    const newSale = { saleID, clientID, clientName };
    await Sale.findByIdAndUpdate(req.params.id, newSale);
    res.json({status: 'Sale updated'});
})

// Delete sales from database
router.delete('/:id', async (req, res) => {
    await Sale.findByIdAndRemove(req.params.id);
    res.json({status: 'Sale deleted'});
})

module.exports = router;