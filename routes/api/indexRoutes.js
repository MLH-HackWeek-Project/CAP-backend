const express = require('express')
const indexRouter = express.Router()

//Create a new user entry
indexRouter.post('/post', (req, res) => {
    res.send('Post API')
})

//Get all users
indexRouter.get('/', (req, res) => {
    const isAuthenticated = req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out'
    res.send(`Welcome to the homepage. ${isAuthenticated}`)
})


module.exports = indexRouter