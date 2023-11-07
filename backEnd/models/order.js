const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
        trim: true
    },
    number: {
        type: Number,
        require: true,
        trim: true
    }
}, {timestamps: true})

module.exports = mongoose.model('Order', OrderSchema);