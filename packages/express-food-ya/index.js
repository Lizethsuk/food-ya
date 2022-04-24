const express = require('express')
const cors = require('cors')
const config = require('./config/config');
const { port } = config.server;
const database = require('./database');
const app = express();
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')
const clientRouter = require('./routes/client')
const restaurantRouter = require('./routes/restaurant')
const dishRouter = require('./routes/dish')
const orderRouter = require('./routes/order')

database.connect(config.database, {
    useNewUrlParser: true
  });

app.use(express.static('public'))
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())

app.get('/',(req,res)=>{
    res.send('<h1>Backend foodya</h1>')
})

app.use('/api/client', clientRouter)
app.use('/api/restaurant', restaurantRouter)
app.use('/api/dish',dishRouter)
app.use('/api/order',orderRouter)


app.use(notFound)
app.use(handleErrors)   

const server = app.listen(port,()=>{
    console.log(`Server is listen in port: ${port}`)
})

module.exports = {app, server}