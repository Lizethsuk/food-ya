require('./mongo')

const express = require('express')
const cors = require('cors')
const app = express();
const notFound = require('./middleware/notFound')
const handleErrors = require('./middleware/handleErrors')
const usersRouter = require('./controllers/users')
const restaurantsRouter = require('./controllers/restaurants')
const usersloginRouter = require('./controllers/userslogin')
const confirmationRouter = require('./controllers/confirmation')
const restaurantsloginRouter = require('./controllers/restaurantslogin')
const menuRouter = require('./controllers/menus.js')
const imgRouter = require('./controllers/image.js')


app.use(express.static('public'))
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors())
/* app.use(express.json())
 */const PORT= process.env.PORT || 3001;

app.get('/',(req,res)=>{
    res.send('<h1>Backend foodya</h1>')
})

app.use('/api/users', usersRouter)
app.use('/api/restaurants', restaurantsRouter)
app.use('/api/userslogin', usersloginRouter)
app.use('/api/restaurantslogin', restaurantsloginRouter)
app.use('/api/menus', menuRouter)
app.use('/confirmation', confirmationRouter)
app.use('/api/image', imgRouter)


app.use(notFound)
app.use(handleErrors)   

const server = app.listen(PORT,()=>{
    console.log(`Server is listen in port: ${PORT}`)
})

module.exports = {app, server}