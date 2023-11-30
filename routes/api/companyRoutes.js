const express = require('express')
const { requiresAuth } = require('express-openid-connect')
const companyRouter = express.Router()

//Create a new attatchement entry
companyRouter.post('/post', requiresAuth(), (req, res) => {
    res.send('Post API')
})   

//Get all available attatchements
companyRouter.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get a single attatchemet
companyRouter.get('/getOne/:id', requiresAuth(), (req, res) => {
    res.send('Get by ID API')
})

//Update details of an attatchement
companyRouter.patch('/update/:id', requiresAuth(), (req, res) => {
    res.send('Update by ID API')
})

//Delete a single attatchement entry
companyRouter.delete('/delete/:id', requiresAuth(), (req, res) => {
    res.send('Delete by ID API')
})

module.exports = companyRouter