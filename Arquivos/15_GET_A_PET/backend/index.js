const express = require('express')
const cors = require('cors')


const app = express()


//Config JSON Response

app.use(express.json)


//Solve CORS
app.use(cors({credentials:true, origin: 'http://localhost:3000'}))


//Public folder for images

app.use(express.static('public'))


const UserRoutes = require('./routes/UserRoutes')
//Routes
app.use('/users' , UserRoutes)
//Routes
app.listen(5000)

