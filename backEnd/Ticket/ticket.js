const{ addOrder, getOrder, deleteOrder} = require('../control/order');

const route = require('express').Router();

route.post('/add-Table', addOrder);
route.get('/get-Table', getOrder);
route.delete('/delete-Table/:id', deleteOrder);

module.exports = route;