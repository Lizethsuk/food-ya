const {verify} = require('jsonwebtoken')

exports.client = async (req,res,next) => {
    const token = req.headers.authorization.slice(7)
    const tokenDecode = verify(token, 'foodya');
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
    const tokenDecode = verify(token, 'foodya');
    const { _id } = tokenDecode
    if(_id) {
        req.id = _id
        next()
    } else {
        res.status(400).json({message: "Unauthorization"})
    }
}