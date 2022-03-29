const {model, Schema} = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

// User Schema
const userSchema = new Schema({
    name: String,
    surname: String,
    email: {type: String, unique: true},
    passwordHash: String,
    dni: String,
    direction: String,
    district: String,
    city: String,
    date: Date,
    confirmation: {type: Boolean, default: false}
})

userSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.passwordHash
    }
})

userSchema.plugin(uniqueValidator)

const Client = model('User', userSchema)

module.exports = Client