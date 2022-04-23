const dishRouter = require('express').Router()
const controller = require('../controllers/dish')
const auth = require('../middleware/auth')

dishRouter.post('/',auth.restaurant, controller.create)
dishRouter.post('/:id',auth.restaurant, controller.update)
dishRouter.delete('/:id', auth.restaurant,controller.delete)

module.exports = dishRouter