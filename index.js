require('dotenv').config()

const express = require('express')
const attachRoutes = require('./routes/api/attachRoutes')
const userRoutes = require('./routes/api/userRoutes')
const connecttodb = require('./utils')

const app = express()
const port = 3000

connecttodb()


app.use(express.json())
app.use('/api/attach', attachRoutes)
app.use('/api/user', userRoutes)

app.listen(port,()=>{
	console.log(`listening on port ${port}`)
})