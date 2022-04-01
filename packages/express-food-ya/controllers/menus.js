const Dish = require('../models/Dish.js');
const Restaurant = require('../models/Restaurant.js');
const menuRouter = require('express').Router();
const joi = require('joi');
const bcrypt = require('bcrypt');

menuRouter.post('/:id', async(req, res) => {
    const {id} = req.params;
    const dish = {restaurantID: id, ...req.body};
    const newDish = new Dish(dish)
    const dishSaved = await newDish.save()
    const restaurant = await Restaurant.findById(id).exec()
    const { DishesID } = restaurant
    const newDishesID = DishesID.concat(dishSaved._id)
    const restaurantUpdate = await Restaurant.findByIdAndUpdate(id, {DishesID: newDishesID },{new: true})
    res.status(201).json({"success": "true", "dish": dishSaved, "restaurant": restaurantUpdate})
});

menuRouter.get('/', async (req, res)=>{
    const {search, page} = req.query
    if(!search){
        const data = await Dish.find({}).populate('restaurantID').exec();
        res.status(200).json(data)
    }else{
        const dishes = await Dish.find({category: { $regex: "pollo"} })
        .populate('restaurantID')
        .skip(page-1)
        .limit(1)
        .exec()
        res.status(200).json(dishes)
    }
})




module.exports = menuRouter