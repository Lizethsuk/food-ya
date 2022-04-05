const mongoose = require('mongoose')
const {model, Schema} = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// Restaurant Schema
const restaurantSchema = new Schema({
    DishesID: [{type: mongoose.Schema.Types.ObjectId, ref: 'Dish'}],
    email: {type: String, unique: true},
    points: {type: Number, default: 3},
    city: {type: String, default: "Lima"},
    passwordHash: String,
    address: String,
    district: String,
    schedule: String,
    ruc: String,
    type: [String],
    ownerName: String,
    deliveryTime: String,
    deliveryPrice: Number,
    restaurantName: String,
    phoneNumber: String,
    imageRestaurant: String,
    logoRestaurant:String,
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