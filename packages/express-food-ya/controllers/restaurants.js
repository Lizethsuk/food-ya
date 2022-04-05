const restaurantsRouter = require('express').Router()
const Restaurant = require('../models/Restaurant')
const cloudinary = require('cloudinary').v2
const joi=require('joi');
const bcrypt = require('bcrypt');
cloudinary.config({
    cloud_name: 'dujnwtncj', //process.env.CLOUDINARY_NAME,
    api_key: '542636139781841', //process.env.CLOUDINARY_API_KEY,
    api_secret: 'xkpXm-2oY6qOm20dcQVAbvQpetQ',
});
/* const nodemailer = require("nodemailer");
 */
restaurantsRouter.get('/', async(req,res)=>{
    const restaurants = await Restaurant.find({})
    res.json(restaurants)
})

restaurantsRouter.get('/:id',async (req,res,next)=>{
    const {id} = req.params 
    try{
        const resturant = await Restaurant.findById(id)
        if(resturant){
            res.json(resturant)
        }
        else{
            res.status(204).end()
        }
    } catch (err) {
        next(err)
    } 
})

restaurantsRouter.delete('/:id',(req,res,next)=>{
    const {id} = req.params
    Restaurant.findByIdAndRemove(id).then(result=>{
        res.status(204).end()
    }).catch(err=>next(err))  
})

restaurantsRouter.put('/:id',(req,res,next)=>{
    const id = req.params.id
    const newRestaurant = req.body
    Restaurant.findByIdAndUpdate(id, newRestaurant, {new: true}).then(result=>{
        res.status(200).json(result)
    }).catch(err=>next(err))  
})

restaurantsRouter.post('/', async(req,res)=>{
        console.log(req.body)
    try{
        const restaurant = req.body.data
        const image = req.body.image
        const logo = req.body.logo
        const resImage = await cloudinary.uploader.upload(image, {upload_preset: 'rhjanagr'});
        const resLogo = await cloudinary.uploader.upload(logo, {upload_preset: 'rhjanagr'});
        const passwordHash = await bcrypt.hash(restaurant.password, 10)
        const data = {
            email: restaurant.email,
            city: restaurant.city,
            passwordHash: passwordHash,
            address: restaurant.address,
            district: restaurant.district,
            schedule: `${restaurant.scheduleOpen} a ${restaurant.scheduleClose}`,
            ruc: restaurant.ruc,
            ownerName: `${restaurant.name} ${restaurant.surname}`,
            deliveryTime: `${restaurant.timeInit} min a ${restaurant.timeEnd} min`,
            deliveryPrice: restaurant.deliveryPrice,
            restaurantName: restaurant.restaurantName,
            phoneNumber: restaurant.phoneNumber,
            imageRestaurant: resImage.url,
            logoRestaurant: resLogo.url,
            date: Date.now()
        }
        // const restaurantSchema=joi.object({
        //     name:joi.string().min(2).max(45).required(),
        //     surname:joi.string().min(2).max(45).required(),
        //     email: joi.string().email().required(),
        //     password: joi.string().required(),
        //     password_confirmation: joi.string().required(),
        //     dni: joi.string().min(8).max(8).required(),
        //     direction: joi.string().min(2).max(50).required(),
        //     district: joi.string().min(2).max(50).required(),
        //     city: joi.string().min(2).max(50).required(),

        //     business_name:joi.string().min(3).max(45).required(),
        //     ruc:joi.string().min(11).max(11).required(),
        //     business_phone:joi.string().min(9).max(12).required(),
        //     business_address: joi.string().min(5).max(50).required(),
        //     business_email:joi.string().email().required(),
        // })

        // const { value, error } = restaurantSchema.validate(restaurant);

        if(true){
            // Validation success
            

            const newResturant = new Restaurant(data)

            savedRestaurant = await newResturant.save()
            res.status(201).json({ success: true, message: 'Restaurant has been created', data: savedRestaurant })

            // newResturant.save().then( user =>{
            //     res.status(201).json({ success: true, message: 'User has been created', data: user })
            // })
        } else {
        res.status(400).json({ success: false, message: 'Validation error', data: value, error: error.details })
        }
    }catch(e){
        res.status(400).json({error: `Email ${req.body.email} is exist`})
    }
})

module.exports = restaurantsRouter
