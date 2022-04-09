const usersRouter = require('express').Router()
const joi=require('joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../models/User')

const getTokenFrom = request => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        return authorization.substring(7)
    }
    return ''
}

usersRouter.get('/', async(req,res)=>{
    const users = await User.find({})
    res.json(users)
})

usersRouter.get('/login',async (req,res,next)=>{

    const token = await getTokenFrom(req)
    try{
        const decodedToken = jwt.verify(token, 'foodya')
        if (!token || !decodedToken.id) {
            return res.status(401).json({ error: 'token missing or invalid' })
        }
        const user = await User.findById(decodedToken.id)
        if(user){
            res.json(user)
        }
        else{
            res.status(204).end()
        }
    } catch (err) {
        next(err)
    } 
})

usersRouter.delete('/:id',(req,res,next)=>{
    const {id} = req.params
    User.findByIdAndRemove(id).then(result=>{
        res.status(204).end()
    }).catch(err=>next(err))  
})

usersRouter.put('/:id',(req,res,next)=>{
    const id = req.params.id
    const newUserInfo = req.body
    const authorized = req.get('authorization')
    User.findByIdAndUpdate(id, newUserInfo, {new: true}).then(result=>{
        res.status(200).json(result)
    }).catch(err=>next(err))
})

usersRouter.post('/', async(req,res)=>{
    try{
        const user = req.body

        const userSchema=joi.object({
        name:joi.string().min(2).max(45).required(),
        surname:joi.string().min(2).max(45).required(),
        email: joi.string().email().required(),
        password: joi.string().required(),
        password_confirmation: joi.string().required(),
        dni: joi.string().min(8).max(8).required(),
        direction: joi.string().min(2).max(50).required(),
        district: joi.string().min(2).max(50).required(),
        city: joi.string().min(2).max(50).required()
        })

        const { value, error } = userSchema.validate(user);

        if(error==null){
            const passwordHash = await bcrypt.hash(user.password, 10)

            const newUser = new User({
                name: user.name,
                surname: user.surname,
                email: user.email,
                passwordHash: passwordHash,
                dni: user.dni,
                direction: user.direction,
                district: user.district,
                city: user.city,
                date: Date.now()
            })

            savedUser = await newUser.save()
            res.status(201).json({ success: true, message: 'User has been created', data: savedUser })
        } else {
        res.status(400).json({ success: false, message: 'Validation error', data: value, error: error.details })
        }
    }catch(e){
        res.status(400).json({error: `Email ${req.body.email} is exist`})
    }
})

module.exports = usersRouter