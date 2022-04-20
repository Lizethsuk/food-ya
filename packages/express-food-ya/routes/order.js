const orderRouter = require('express').Router()
const controller = require('../controllers/order')
const auth = require('../middleware/auth')

orderRouter.post('/', controller.create)
orderRouter.get('/:id', controller.readOne)
orderRouter.get('/client/:id', controller.readClient)
orderRouter.get('/restaurant/:id', controller.readRestaurant)

module.exports = orderRouter