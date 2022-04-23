const dishRouter = require('express').Router()
const controller = require('../controllers/dish')

dishRouter.post('/', controller.create)
dishRouter.post('/:id', controller.update)
dishRouter.delete('/:id', controller.delete)

module.exports = dishRouter