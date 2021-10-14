const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        {
            SaleId: 1,
            ClientId: 1,
            ClientName: "Harry Potter",
            ProductName: "Wand"
        },
        {
            SaleId: 2,
            ClientId: 1,
            ClientName: "Ron Wesly",
            ProductName: "Candy"
        }
    ]);
});

router.get('/{SalesId}', (req, res) => { // pass argument to API
    var SalesId;
    if(SalesId === 1){
        res.json({
                ClientId: 1,
                ClientName: "Harry Potter",
                ProductName: "Wand"
            });
    } else if(SalesId === 2){
        res.json({
                ClientId: 1,
                ClientName: "Harry Potter",
                ProductName: "Wand"
            });
    } else {
        // Return error 204 Sale not found.
    }
});


module.exports = router;