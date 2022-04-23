const {model, Schema} = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')
const {hash, compare} = require('bcrypt');

// User Schema
const userSchema = new Schema({
    email: {type: String, unique: true},
    name: String,
    surname: String,
    password: String,
    dni: String,
    address: String,
    phoneNumber: String,
    date: Date,
    OrdersID: [{type: Schema.Types.ObjectId, ref: 'Order'}],
    PaymentMethodsID: [{type: Schema.Types.ObjectId, ref: 'PaymentMethod'}],
    confirmation: {type: Boolean, default: true}
})

userSchema.pre('save', async function save(next) {
    if (this.isNew || this.isModified('password')) {
      this.password = await hash(this.password, 10);
    }
    next();
  }
);

userSchema.set('toJSON', {
    transform: (document, returnedObject)=>{
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
    }
})

userSchema.methods.verifyPassword = function verifyPassword(password) {
    console.log(password);
    return compare(password, this.password);
}

userSchema.plugin(uniqueValidator)

const Client = model('Client', userSchema)

module.exports = Client