const {model, Schema} = require('mongoose')
const {hash, compare} = require('bcrypt');
const uniqueValidator = require('mongoose-unique-validator')

// Restaurant Schema
const restaurantSchema = new Schema({
    DishesID: [{type: Schema.Types.ObjectId, ref: 'Dish'}],
    OrdersID: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    email: {type: String, unique: true},
    points: {type: Number, default: 3},
    city: {type: String, default: "Lima"},
    password: String,
    address: String,
    district: String,
    scheduleOpen: String,
    scheduleClose: String,
    ruc: String,
    type: String,
    name: String,
    surname: String,
    timeMin: String,
    timeMax: String,
    deliveryPrice: String,
    restaurantName: String,
    phoneNumber: String,
    card_img: String,
    card_imgId: String,
    innerImg: String,
    innerImgId: String,
    date: Date,
    confirmation: {type: Boolean, default: false}
})

restaurantSchema.pre('save', async function save(next) {
    if (this.isNew || this.isModified('password')) {
      this.password = await hash(this.password, 10);
    }
    if (this.isNew || this.isModified())
    next();
  }
);

restaurantSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
    }
})

restaurantSchema.methods.verifyPassword = function verifyPassword(password) {
    console.log(password);
    return compare(password, this.password);
}

restaurantSchema.plugin(uniqueValidator)

const Restaurant = model('Restaurant', restaurantSchema)

module.exports = Restaurant