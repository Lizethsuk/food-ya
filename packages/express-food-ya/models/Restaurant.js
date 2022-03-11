const {model, Schema} = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// Restaurant Schema
const restaurantSchema = new Schema({
    name: String,
    surname: String,
    email: {type: String, unique: true},
    passwordHash: String,
    dni: String,
    direction: String,
    district: String,
    city: String,
    
    business_name: String,
    ruc: String,
    business_phone: String,
    business_email: String,
    business_address: String,
    date: Date,
    confirmation: {type: Boolean, default: false}
})

restaurantSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

restaurantSchema.plugin(uniqueValidator)

const Restaurant = model('Restaurant', restaurantSchema)

module.exports = Restaurant