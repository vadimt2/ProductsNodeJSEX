const express = require('express');
const router = express.Router();

const products = require('../products');

router.get('/',(req,res) => {
    try {
        res.send(res.json(products));
    } catch (error) {
        res.send('Error' + error);
    }
});


module.exports = router;