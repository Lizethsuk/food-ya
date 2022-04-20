const dishRouter = require('express').Router()
const controller = require('../controllers/dish')
const auth = require('../middleware/auth')

dishRouter.post('/',auth, controller.create)
dishRouter.post('/:id',auth, controller.update)
dishRouter.delete('/:id',auth, controller.delete)

module.exports = dishRouter