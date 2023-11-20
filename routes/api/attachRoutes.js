const express = require('express')
const attachRouter = express.Router()

//Create a new attatchement entry
attachRouter.post('/post', (req, res) => {
    res.send('Post API')
})   

//Get all available attatchements
attachRouter.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get a single attatchemet
attachRouter.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update details of an attatchement
attachRouter.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete a single attatchement entry
attachRouter.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = attachRouter