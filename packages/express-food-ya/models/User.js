const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    email: String,
    passwordHash: String,
    userTypeID: {type: mongoose.Schema.Types.ObjectId, refPath: 'typeUser'},
    typeUser: {type: String, enum: ['Clien', 'Restaurant']}
})
const User = mongoose.model('User', userSchema)
module.exports = User