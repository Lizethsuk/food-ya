const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const menuSchema = new mongoose.Schema({
    idRestaurant: mongoose.Schema.Types.ObjectId,
    dishes: [{
        name: {type: String, unique: true},
        price: String,
        description: String,
        img: String,
        points: Number,
    }],
    name: String,
    type: String,
    schedule: String,
    points: Number,
    card_img : String,
    inner_img: String

    
});

menuSchema.plugin(uniqueValidator);

const Menu = mongoose.model('Menu', menuSchema);
module.exports = Menu