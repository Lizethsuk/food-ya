require('./mongo')

const express = require('express')
const cors = require('cors')
const app = express();
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')
const usersRouter = require('./controllers/users')
const restaurantsRouter = require('./controllers/restaurants')
const usersloginRouter = require('./controllers/userslogin')
const restaurantsloginRouter = require('./controllers/restaurantslogin')



app.use(cors())
app.use(express.json())
const PORT= process.env.PORT || 3001;

app.get('/',(req,res)=>{
    res.send('<h1>Backend foodya</h1>')
})

app.use('/api/users', usersRouter)
app.use('/api/restaurants', restaurantsRouter)
app.use('/api/userslogin', usersloginRouter)
app.use('/api/restaurantslogin', restaurantsloginRouter)


app.use(notFound)
app.use(handleErrors)   

const server = app.listen(PORT,()=>{
    console.log(`Server is listen in port: ${PORT}`)
})

module.exports = {app, server}