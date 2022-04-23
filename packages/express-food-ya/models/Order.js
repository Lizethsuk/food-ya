const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    restaurantID: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
    clientID: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    paymentID: {type: mongoose.Schema.Types.ObjectId, ref: 'Payment'},
    dishesID: [{type: mongoose.Schema.Types.ObjectId, ref: 'Dish'}],
    paid: Boolean,
    paymentStatus: String
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order