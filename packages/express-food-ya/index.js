const express = require('express')
const socket = require('socket.io')
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

const io = socket(server)
  
  let onlineUsers = []
  
  const addNewUser = (userid, socketId) => {
    !onlineUsers.some((user)=>user.userid === userid) && onlineUsers.push({userid, socketId})
  }
  
  const removeUser = (socketId) => {
    onlineUsers = onlineUsers.filter((user)=>user.socketId !== socketId)
  }
  
  const getUser = (userId) => {
    return onlineUsers.find(user=>user.userid === userId)
  }
  
  
  io.on("connection", (socket)=>{
      console.log("se unio usuario")
    socket.on("newRestaurant", (userId)=>{
      addNewUser(userId, socket.id);
      console.log("se unio")
      console.log(onlineUsers)
    })
  
    socket.on("Pedido", ({idrestaurant})=>{
      const restaurant = getUser(idrestaurant)
      console.log(idrestaurant)
      console.log(restaurant)
      if(restaurant!==undefined){
        console.log("enviando pedido")
        io.to(restaurant?.socketId).emit("tomarPedido")
      }
      socket.disconnect(true)
    })
  
    socket.on("salir",()=>{
      socket.disconnect(true)
    })
  
    socket.on("disconnect",()=>{
      removeUser(socket.id)
      console.log("se salio")
      console.log(onlineUsers)
    })
  })