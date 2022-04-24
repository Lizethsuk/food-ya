const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    dishID: {type: mongoose.Schema.Types.ObjectId, ref: 'Dish'},
    restaurantID: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
    clientID: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    orderID: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
    dishName: String,
    description: String,
    price: String,
    image: String,
    value: Number
})

const DishOrder = mongoose.model('DishOrder', schema)

module.exports = DishOrder