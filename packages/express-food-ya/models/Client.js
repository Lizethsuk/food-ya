const {model, Schema} = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// User Schema
const userSchema = new Schema({
    name: String,
    email: {type: String, unique: true},
    passwordHash: String,
    dni: String,
    address: String,
    phoneNumber: String,
    date: Date,
    OrdersID: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    PaymentMethodsID: [{type: Schema.Types.ObjectId, ref: 'PaymentMethod'}],
    confirmation: {type: Boolean, default: true}
})

userSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

userSchema.plugin(uniqueValidator)

const Client = model('Client', userSchema)

module.exports = Client