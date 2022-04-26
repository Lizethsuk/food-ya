const Order = require('../models/Order')
const Restaurant = require('../models/Restaurant')
const Client = require('../models/Client')
const DishOrder = require('../models/DishOrder')
const email = require('../template/orderMail')
const {transporter, NODE_MAILER_EMAIL, isDev} = require('../config/nodemailer')

exports.create = async (req, res) => {
    const clientID = req.id
    const { body } = req
    const products = body.products
    const date = new Date().toLocaleDateString().split('/')
    const data = {
        restaurantName: body.restaurantName,
        clientID,
        restaurantID: body.restaurantID,
        orderNumber: body.orderNumber,
        deliveryType: body.deliveryType,
        totalPayment: body.totalPayment,
        day: date[0],
        month: date[1],
        year: date[2]
    }
    const newOrder = new Order(data)
    try {
        const savedOrder = await newOrder.save()
        const idarray = []
        for (let item of products) {
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
            let dishOrder = await newDish.save()
            idarray.push(dishOrder._id)
        }
        const order = await Order.findByIdAndUpdate(savedOrder._id, { products: idarray }, { new: true })
        const restaurant = await Restaurant.findById(data.restaurantID)
        let OrdersID = restaurant.OrdersID.concat(savedOrder._id)
        await Restaurant.findByIdAndUpdate(data.restaurantID, { OrdersID })
        const client = await Client.findById(data.clientID)
        OrdersID = client.OrdersID.concat(savedOrder._id)
        await Client.findByIdAndUpdate(data.clientID, { OrdersID })

        const msg = {
            to: client.email,
            from: `FoodYa! 🍔 <${NODE_MAILER_EMAIL}>`,
            subject: 'Su pedido se ha realizado con éxito',
            html: email.template({numero: body.orderNumber,nombre: restaurant.restaurantName, total: body.totalPayment})
        }

        if(!isDev){
            transporter.verify().then(()=> console.log('nodemailer config is correct'))
            transporter.sendMail(msg)
                .then(()=>console.log('email registro orden enviado'))
                .catch((e)=>console.log('ocurrió un error', e.message))
        }

        res.status(200).json(order)
    } catch (e) {
        console.log(e)
        res.status(400).json({ "message": e.message })
    }
}

exports.readOne = async (req, res) => {
    const orderID = req.params.id
    try {
        const order = await Order.findById(orderID).populate('products').populate('clientID').exec()
        res.status(200).json(order)
    } catch (e) {
        console.log(e)
        res.status(400).json({ "message": e.message })
    }
}

exports.readClient = async (req, res) => {
    const clientId = req.id
    try {
        const order = await Order.find({ clientId }).populate('products')
        res.status(200).json({ order })
    } catch (e) {
        console.log(e)
        res.status(400).json({ "message": e.message })
    }
}

exports.readRestaurant = async (req, res) => {
    const restaurantID = req.id
    try {
        const order = await Order.find({ restaurantID }).populate('products').populate('clientID').exec()
        res.status(200).json({ order })
    } catch (e) {
        console.log(e)
        res.status(400).json({ "message": e.message })
    }
}