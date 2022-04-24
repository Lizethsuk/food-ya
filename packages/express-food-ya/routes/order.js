const orderRouter = require('express').Router()
const controller = require('../controllers/order')
const auth = require('../middleware/auth')

orderRouter.post('/',auth.client, controller.create)
orderRouter.get('/client',auth.client, controller.readClient)
orderRouter.get('/restaurant',auth.client, controller.readRestaurant)
orderRouter.get('/get/:id', controller.readOne)

module.exports = orderRouter