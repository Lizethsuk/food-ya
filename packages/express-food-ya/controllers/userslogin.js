const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const usersloginRouter = require('express').Router()
const User = require('../models/User')


usersloginRouter.post('/',async (req,res)=>{
    const userlogin = req.body
    const {email, password} = userlogin
    const user = await User.findOne({email})
    if(user.confirmation== false){
        res.status(200).json({'error': 'email no confirmado'})
    }

    const passwordCorrect = user === null ? false : await bcrypt.compare(password, user.passwordHash)

    if(!passwordCorrect){
        res.status(401).send({error: 'invalid email or password'})
    } else{
        const userForToken = {
            id: user._id,
            email: user.email,
            name: user.name
        }
        const secretword = 'foodya'
        const token = jwt.sign(userForToken, secretword)
        res.json({email: user.email, name: user.name, token: token})
    }
})

module.exports = usersloginRouter