const usersRouter = require('express').Router()
const User = require('../models/User');
const bcrypt = require('bcrypt');
const Restaurant = require('../models/Restaurant')
const Dish = require('../models/Dish')

usersRouter.get('/', async(req,res)=>{
    const {search} = req.query
    const users = await User.find({}).exec()
    res.json(search)
})

usersRouter.post('/', async(req,res)=>{
    const {email, password, typeUser, ...data} = req.body
    const passwordHash = await bcrypt.hash(password, 10)
    const newUser = new User({
        email,
        passwordHash,
        typeUser
    })
    const user = await newUser.save()
    if(typeUser === 'Restaurant'){
        const newRestaurant = new Restaurant({...data, UserID: user._id})
        const restaurant = await newRestaurant.save()
        const userUpdate = await User.findByIdAndUpdate(user._id,{userTypeID: restaurant._id}, {new: true})
        console.log(userUpdate, restaurant)
        res.status(201).json({ success: true, message: 'User has been created', user: userUpdate, restaurant: restaurant })
    }
})

usersRouter.post('/:id', async (req,res)=>{
    const {id} = req.params;
    const data = req.body;
    const newDish = new Dish({
        restaurantID: id,
        ...data
    })
    const saveDish = await newDish.save()
    const restaurant = await Restaurant.findById(id)
    const DishesID = [...restaurant.DishesID, saveDish._id]
    const restaurantUpdate = await Restaurant.findByIdAndUpdate(id, {DishesID: DishesID}, {new: true})
    res.status(201).json({success: true, resturant: restaurantUpdate, dish: saveDish})
})

module.exports = usersRouter