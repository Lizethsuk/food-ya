const mongoose = require('mongoose')
const paymentMethodSchema = mongoose.Schema({
    paymentsID: [{type: mongoose.Schema.Types.ObjectId, ref:'Payment'}],
    clienID: {type: mongoose.Schema.Types.ObjectId, ref: 'Client'},
    name: String
})

const PaymentMethod = mongoose.model('PaymentMethod', paymentMethodSchema)
module.exports = PaymentMethod