const Restaurant = require('../models/Restaurant')
const RestaurantView = require('../models/RestaurantView')
const cloudinary = require('../config/cloudinary')

exports.signup =  async(req,res)=>{
    const restaurant = req.body.data
    const image = req.body.image
    const logo = req.body.logo
    try{
        const resImage = await cloudinary.uploader.upload(image, {upload_preset: 'rhjanagr'});
        const resLogo = await cloudinary.uploader.upload(logo, {upload_preset: 'rhjanagr'});
        const data = {
            ...restaurant,
            card_img: resImage.url,
            card_imgId: resImage.public_id,
            innerImg: resLogo.url,
            innerImgId: resLogo.public_id,
            date: Date.now()
        }
        const newRestaurant = new Restaurant(data)
        const savedRestaurant = await newRestaurant.save()
        
        const dataView = {
            id: savedRestaurant._id,
            city: savedRestaurant.city,
            district: savedRestaurant.district,
            scheduleOpen: savedRestaurant.scheduleOpen,
            scheduleClose: savedRestaurant.scheduleClose,
            type: savedRestaurant.type,
            timeMin: savedRestaurant.timeMin,
            timeMax: savedRestaurant.timeMin,
            deliveryPrice: savedRestaurant.deliveryPrice,
            restaurantName: savedRestaurant.restaurantName,
            phoneNumber: savedRestaurant.phoneNumber,
            card_img: savedRestaurant.card_img,
            date: Date,
        }

        const newRestaurantView = new Restaurant(dataView)
        const savedRestaurantView = await newRestaurantView.save()

        res.status(201).json({ success: true, message: 'Restaurant has been created', data: savedRestaurant })        
    }catch(e){
        res.status(400).json({error: `Email ${req.body.email} is exist`})
    }
}

exports.signin = async (req,res)=> {
    const login = req.body
    const {email, password} = login
    try{
        const user = await Restaurant.findOne({email}).exec()
        if(!user) {
            res.status(401).json({ 
                success: false, 
                message: "Email or Password are invalid"
            });
        } else {
            const isVerifiedPassword = await user.verifyPassword(password);
            if(!isVerifiedPassword){
                res.status(401).json({ 
                    success: false, 
                    message: "Email or Password are invalid"
                })
            } else {
                const { _id } = user;
                const secretword = 'foodya'
                const token = jwt.sign({ _id }, secretword,{ expiresIn: 60 * 60 })
                res.status(200).json({succes: true, name: user.name, token })
            }
        }
    } catch(e) {
        console.log(e)
    }
}

exports.getAll = async(req,res)=>{
    if(req.query){
        const {search, page} = req.query
        const restaurants = await RestaurantView.find({dishes: {$all : [new RegExp(search)]}}).exec()
        res.status(200).json(restaurants)
    }else{
        const restaurants = await RestaurantView.find({})
        res.status(200).json(restaurants)
    }
}

exports.getOne = async (req,res,next)=>{
    const {id} = req.params 
    try{
        const restaurant = await Restaurant.findById(id).populate('DishesID').exec()
        const data = {
            dishes: restaurant.DishesID,
            id, 
            name: restaurantName,
            innerImg: restaurant.innerImg,
            card_img: restaurant.card_img,
            type: restaurant.type,
            schedule: restaurant.schedule,
            points: restaurant.points
        }
        if(restaurant){
            res.status(200).json(data)
        }
        else{
            res.status(204).end()
        }
    } catch (err) {
        next(err)
    }
}

exports.update = async (req,res)=>{
    const id = req.id
    const restaurant = req.body.data
    const image = req.body.image
    const logo = req.body.logo
    if( image || logo){
        const rest = await Restaurant.findById(id)
        if(image){
            await cloudinary.uploader.destroy(rest.card_img)
            const card_img = await cloudinary.uploader.upload(image,{upload_preset: 'rhjanagr'})
            restaurant.card_img = card_img.url
            restaurant.card_imgId = card_img.public_id
        }
        if(logo){
            await cloudinary.uploader.destroy(rest.innerImg)
            const innerImg = await cloudinary.uploader.upload(image,{upload_preset: 'rhjanagr'})
            restaurant.innerImg = innerImg.url
            restaurant.innerImgId = innerImg.public_id
        }
    }
    const newRestaurant = await Restaurant.findByIdAndUpdate(id, restaurant, {new: true})
    const dataView = {
        id: newRestaurant._id,
        city: newRestaurant.city,
        district: newRestaurant.district,
        scheduleOpen: newRestaurant.scheduleOpen,
        scheduleClose: newRestaurant.scheduleClose,
        type: newRestaurant.type,
        timeMin: newRestaurant.timeMin,
        timeMax: newRestaurant.timeMin,
        deliveryPrice: newRestaurant.deliveryPrice,
        restaurantName: newRestaurant.restaurantName,
        phoneNumber: newRestaurant.phoneNumber,
        card_img: newRestaurant.card_img,
    }
    const newRestaurantUpdate = await RestaurantView.findOneAndUpdate({id}, dataView,{new: true})
    res.status(201).json({ success: true, message: 'Restaurant has been updated', data: newRestaurant })
}