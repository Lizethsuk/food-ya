const Order = require('../models/Order')
const Restaurant = require('../models/Restaurant')
const Client = require('../models/Client')

exports.create = async(req,res)=>{
    const clientID = req.id
    const data = {
        ...req.body,
        clientID
    }
    const newOrder = new Order(data)
    const savedOrder = await newOrder.save()
    const restaurant = await Restaurant.findById(data.restaurantID)
    let OrdersID = restaurant.OrdersID.concat(savedOrder._id)
    await Restaurant.findByIdAndUpdate(data.restaurantID, {OrdersID})
    const client = await Client.findById(data.clientID)
    OrdersID = client.OrdersID.concat(savedOrder._id)
    await Client.findByIdAndUpdate(data.clientID, {OrdersID})
    res.status(200).json(savedOrder)
}

exports.readOne = async(req,res)=>{
    const dishId = req.params
    const order = await Order.findById(dishId)
    res.status(200).json(order)
}

exports.readClient = async(req,res)=>{
    const clientId = req.params
    const order = await Order.find({clientId})
    res.status(200).json(order)
}

exports.readRestaurant = async(req, res)=>{
    const restaurantID = req.params
    const order = await Order.find({restaurantID})
    res.status(200).json(order)
}