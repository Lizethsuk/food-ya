const mongoose = require('mongoose')

const paymentSchema = mongoose.Schema({
    paymentMethodID: {type: mongoose.Schema.Types.ObjectId, ref: 'PaymentMethod'},
    orderID: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
    tota: Number,
    status: String
})

const Payment = mongoose.model('Payment',paymentSchema)
module.exports = Payment