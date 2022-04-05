const imgRouter = require('express').Router();
const cloudinary = require('cloudinary').v2;
const Dish = require('../models/Dish');
const Restaurant = require('../models/Restaurant');
const jwt = require('jsonwebtoken');
cloudinary.config({
    cloud_name: 'dujnwtncj', //process.env.CLOUDINARY_NAME,
    api_key: '542636139781841', //process.env.CLOUDINARY_API_KEY,
    api_secret: 'xkpXm-2oY6qOm20dcQVAbvQpetQ',
});
imgRouter.post('/', async (req, res) => {
    const img = req.body.imagen;
    const token = req.body.token;
    const tokenDecode = jwt.verify(token, 'foodya');
    const id = tokenDecode.id;
    const product = req.body.products;
    const response = await cloudinary.uploader.upload(img, {upload_preset: 'rhjanagr'});
    const data = {
        restaurantID: id,
        dishName: product.dishName,
        description: product.description,
        image: response.url,
        price: product.price
    }
    const dish = new Dish(data);
    const dishSaved = await dish.save();
    const restaurant = await Restaurant.findById(id);
    const dishesId = restaurant.DishesID.concat(dishSaved._id);
    const category = restaurant.type.concat(product.category);
    const restaurantUpdate = await Restaurant.findByIdAndUpdate(id, {DishesID: dishesId, type: category}, {new: true});
    res.status(201).json(restaurantUpdate);
})
module.exports= imgRouter
