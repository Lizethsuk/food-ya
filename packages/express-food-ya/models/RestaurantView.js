const { model, Schema } = require('mongoose')

const schema = new Schema({
    id: Schema.Types.ObjectId,
    dishes: [{ type: String }],
    points: { type: Number, default: 3 },
    city: { type: String, default: "Lima" },
    district: String,
    scheduleOpen: String,
    scheduleClose: String,
    type: String,
    timeMin: String,
    timeMax: String,
    deliveryPrice: Number,
    restaurantName: String,
    phoneNumber: String,
    card_img: String,
    date: Date,
})

schema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject._id
    }
})

const RestaurantView = model('RestaurantView', schema)

module.exports = RestaurantView