const mongoose = require('mongoose');

const conectionString = "mongodb+srv://food-ya:food-ya@cluster0.1o7wa.mongodb.net/foodyadatabase?retryWrites=true&w=majority"

mongoose.connect(conectionString).then(()=>{
    console.log('Database connected')
}).catch(err=>{
    console.error(err)
})