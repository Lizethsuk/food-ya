const restaurantRouter = require('express').Router()
const controller = require('../controllers/restaurants')
const auth = require('../middleware/auth')

restaurantRouter.get('/owner', auth.restaurant, controller.getOwner)
restaurantRouter.post('/signin', controller.signin)
restaurantRouter.post('/signup', controller.signup)
restaurantRouter.get('/', controller.getAll)
restaurantRouter.get('/:id', controller.getOne)
restaurantRouter.patch('/', auth.restaurant, controller.update)


module.exports = restaurantRouter