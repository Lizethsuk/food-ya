const Order = require('../models/Order')
const Restaurant = require('../models/Restaurant')
const Client = require('../models/Client')
const DishOrder = require('../models/DishOrder')

exports.create = async(req,res)=>{
    const clientID = req.id
    const { body } = req
    const products = body.products
    const date = new Date().toLocaleDateString().split('/')
    const data = {
        clientID,
        restaurantID: body.restaurantID,
        orderNumber: body.orderNumber,
        deliveryType: body.deliveryType,
        totalPayment: body.totalPayment,
        day: date[1],
        month: date[0],
        year: date[2]
    }
    const newOrder = new Order(data)
    try{
        const savedOrder = await newOrder.save()
        const idarray = []
        for(let item of products){
            let document = {
                clientID,
                restaurantID: body.restaurantID,
                orderID: savedOrder._id,
                dishID: item.id,
                dishName: item.name,
                description: item.description,
                price: item.price,
                value: item.value,
                image: item.img
            }
            let newDish = new DishOrder(document)
            let dishOrder=await newDish.save()
            idarray.push(dishOrder._id)
        }
        const order = await Order.findByIdAndUpdate(savedOrder_id, {products: idarray})
        const restaurant = await Restaurant.findById(data.restaurantID)
        let OrdersID = restaurant.OrdersID.concat(savedOrder._id)
        await Restaurant.findByIdAndUpdate(data.restaurantID, {OrdersID})
        const client = await Client.findById(data.clientID)
        OrdersID = client.OrdersID.concat(savedOrder._id)
        await Client.findByIdAndUpdate(data.clientID, {OrdersID})
        res.status(200).json(order)
    }catch(e){
        console.log(e)
        res.status(400).json({"message": e.message})
    }
}

exports.readOne = async(req,res)=>{
    const orderID = req.params
    try{
        const order = await Order.findById(orderID).populate('products')
        res.status(200).json(order)
    }catch(e){
        console.log(e)
        res.status(400).json({"message": e.message})
    }
}

exports.readClient = async(req,res)=>{
    const clientId = req.params
    try{
        const order = await Order.find({clientId}).populate('products')
        res.status(200).json({order})
    }catch(e){
        console.log(e)
        res.status(400).json({"message": e.message})
    }
}

exports.readRestaurant = async(req, res)=>{
    const restaurantID = req.params
    try{
        const order = await Order.find({restaurantID}).populate('products')
        res.status(200).json({order})
    }catch(e){
        console.log(e)
        res.status(400).json({"message": e.message})
    }
}