require('dotenv').config()

const express = require('express')
const { auth } = require('express-openid-connect')
const attachRoutes = require('./routes/api/attachRoutes')
const userRoutes = require('./routes/api/userRoutes')
const companyRoutes = require('./routes/api/companyRoutes')
const indexRoutes = require('./routes/api/indexRoutes')
const connecttodb = require('./utils')

const app = express()
const port = 3000

connecttodb()

// Auth0 configuration details
// Auth0 middleware that allows for securing of api routes
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER,
};



app.use(express.json())
app.use(auth(config))

app.use('/', indexRoutes)
app.use('/api/attach', attachRoutes)
app.use('/api/user', userRoutes)
app.use('/api/company', companyRoutes)

app.listen(port,()=>{
	console.log(`listening on port ${port}`)
})