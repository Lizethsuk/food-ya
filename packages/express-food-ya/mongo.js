const mongoose = require('mongoose');
//const conectionString = 'mongodb://localhost:27017'
const conectionString = "mongodb+srv://food-ya:food-ya@cluster0.1o7wa.mongodb.net/foodyadatabaseaux?retryWrites=true&w=majority"

mongoose.connect(conectionString).then(()=>{
    console.log('Database connected')
}).catch(err=>{
    console.error(err)
})