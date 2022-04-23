const clientRouter = require('express').Router()
const controller = require('../controllers/client')
const auth = require('../middleware/auth')

clientRouter.post('/signin', controller.signin)
clientRouter.post('/signup', controller.signup)
clientRouter.patch('/update',auth.client, controller.update)

module.exports = clientRouter