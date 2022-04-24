const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    restaurantID: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
    clientID: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    paymentID: {type: mongoose.Schema.Types.ObjectId, ref: 'Payment'},
    products: [{type: mongoose.Schema.Types.ObjectId, ref: 'DishOrder'}],
    restaurantName: {type: String, default: 'Default Name'},
    orderNumber: String,
    deliveryType: String,
    totalPayment: Number,
    paid: Boolean,
    paymentStatus: String,  
    day: String,
    month: String,
    year: String
})

const Order = mongoose.model('Order', orderSchema)

module.exports = Order