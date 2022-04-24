const mongoose = require('mongoose');

const dishSchema = new mongoose.Schema({
    restaurantID: {type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant'},
    orderID: {type: mongoose.Schema.Types.ObjectId, ref: 'Order'},
    dishName: String,
    description: String,
    image: String,
    imageid: String,
    price: String
})

dishSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Dish = mongoose.model('Dish', dishSchema)

module.exports = Dish