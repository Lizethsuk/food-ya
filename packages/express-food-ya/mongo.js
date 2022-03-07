const mongoose = require('mongoose');

//conection to local database
//const conectionString = 'mongodb://localhost:27017'

//conection to remote database
const conectionString = "mongodb+srv://food-ya:food-ya@cluster0.1o7wa.mongodb.net/foodyadatabase?retryWrites=true&w=majority"

// conection to mongodb

mongoose.connect(conectionString).then(()=>{
    console.log('Database connected')
}).catch(err=>{
    console.error(err)
})