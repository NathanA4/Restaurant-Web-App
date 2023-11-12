const{ addOrder, getOrder, deleteOrder} = require('../control/order');

const route = require('express').Router();

route.post('/add-order', addOrder);
route.get('/get-order', getOrder);
route.delete('/delete-order/:id', deleteOrder);

module.exports = route;