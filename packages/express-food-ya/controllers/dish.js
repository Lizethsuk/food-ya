const Dish = require('../models/Dish')
const Restaurant = require('../models/Restaurant')
const RestaurantView = require('../models/RestaurantView')
const {cloudinary, UPLOAD_PRESET} = require('../config/cloudinary')

exports.create = async(req,res)=>{
    const id = req.id
    const {img, product} = req.body
    console.log(img,product)
    try{
        const image = await cloudinary.uploader.upload(img, {upload_preset: UPLOAD_PRESET});
        console.log(image)
        const data = {
            restaurantID: id,
            ...product,
            image: image.url,
            imageid: image.public_id
        }
        const dish = new Dish(data);
        const dishSaved = await dish.save();
        const restaurant = await Restaurant.findById(id);
        const dishesId = restaurant.DishesID.concat(dishSaved._id);
        const restaurantUpdate = await Restaurant.findByIdAndUpdate(id, {DishesID: dishesId}, {new: true});
        const restaurantView = await RestaurantView.findOne({id});
        const dishes = restaurantView.dishes.concat(dishSaved.dishName);
        const viewUpdate = await Restaurant.findByIdAndUpdate(id, {dishes}, {new: true});
        res.status(201).json(dishSaved);
    }catch(e){
        console.log(e)
    }
}

exports.update = async(req,res)=>{
    const restaurantId = req.id
    const dishId = req.params.id
    const {img, product} = req.body
    try{
        const dish = await Dish.findById(dishId)
        if(img){
            const image = await cloudinary.uploader.upload(img, {upload_preset: 'rhjanagr'});
            const data = {
                ...product,
                image: image.url,
                imageid: image.public_id
            }
            await cloudinary.uploader.destroy(dish.imageid)
        } else {
            const data = {
                ...product
            }
        }
        if(data.name){
            const restaurantView = await RestaurantView.findOne({id: restaurantId})
            const dishes = restaurantView.dishes.filter(dish=>dish!==dish.dishName)
            dishes.push(data.name)
            const viewUpdate = await RestaurantView.findOneAndUpdate({id: restaurantId}, {dishes}, {new: true});
        }
        const dishUpdate = await Dish.findByIdAndUpdate(dishId, data, {new: true})
        res.status(201).json(dishUpdate);
    }catch(e){
        console.log(e)
    }
}

exports.delete = async(req,res)=>{
    const restaurantId = req.id
    const dishId = req.params.id
    try{
    const dish = await Dish.findById(dishId)
    await cloudinary.uploader.destroy(dish.imageid)
    const restaurantView = await RestaurantView.findOne({id: restaurantId})
    const dishes = restaurantView.dishes.filter(dish=>dish!==dish.dishName)
    const restaurant = await Restaurant.findById(restaurantId)
    const dishesID = restaurant.DishesID.filter(id => id.toString()!==dishId)
    await Dish.findByIdAndDelete(dishID)
    await RestaurantView.findOneAndUpdate({id: restaurantId},{dishes})
    await Restaurant.findByIdAndUpdate(id, {dishesID})
    res.status(200).json({"message": "delete"})
    }catch(e){
        console.log(e)
    }
}