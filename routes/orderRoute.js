const express = require('express');
const router = express.Router();
const order = require('../app/api/controller/orderController');

// give order from following , routes: /order/addOrder
router.post('/addOrder', order.giveOrAddOrder);
// get all order dtails
router.get('/getOrders', order.getAllOrders);
// get specfic order dtails
router.get('/getOrder/:id', order.getOrder);




module.exports = router