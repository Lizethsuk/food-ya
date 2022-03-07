const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const restaurantsloginRouter = require('express').Router()
const Restaurant = require('../models/Restaurant')


restaurantsloginRouter.post('/',async (req,res)=>{
    const restaurantlogin = req.body
    const {email, password} = restaurantlogin
    const restaurant = await Restaurant.findOne({email})
    const passwordCorrect = restaurant === null ? false : await bcrypt.compare(password, restaurant.passwordHash)

    if(!passwordCorrect){
        res.status(401).send({error: 'invalid email or password'})
    } else{
        const restaurantForToken = {
            id: restaurant._id,
            email: restaurant.email,    
            name: restaurant.name
        }
        const secretword = 'foodya'
        const token = jwt.sign(restaurantForToken, secretword)
        res.json({email: restaurant.email, name: restaurant.name, token: token})
    }
})

module.exports = restaurantsloginRouter