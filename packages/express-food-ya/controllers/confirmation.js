const confirmationRouter = require('express').Router()
const jwt = require('jsonwebtoken')
const Client = require('../models/Client')

confirmationRouter.post('/', async(req, res)=> {
    const {token} = req.body;
    const tokenDecode = jwt.verify(token, 'liz');
    const email=tokenDecode.email;
    const findAndConfirmation = await Client.findOneAndUpdate({email:email}, {confirmation:true});
    res.status(200).json(findAndConfirmation)
})

module.exports= confirmationRouter