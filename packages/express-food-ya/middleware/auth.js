const {verify} = require('jsonwebtoken')
const {secret} = require('../config/config').token

exports.client = async (req,res,next) => {
    const token = req.headers.authorization.slice(7)
    const tokenDecode = verify(token, secret);
    const { _id } = tokenDecode
    if(_id) {
        req.id = _id
        next()
    } else {
        res.status(400).json({message: "Unauthorization"})
    }
}

exports.restaurant = async (req,res,next) => {
    const token = req.headers.authorization.slice(7)
    try{
        const tokenDecode = verify(token, secret);
        const { _id } = tokenDecode
        if(_id) {
            req.id = _id
            next()
        } else {
            res.status(400).json({message: "Unauthorization"})
        }
    }catch(e){
        console.log(e)
        res.status(400).json({message: "Unauthorization"})
    }
    
}