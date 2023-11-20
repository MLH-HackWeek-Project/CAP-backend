const express = require('express')
const userRouter = express.Router()

//Create a new user entry
userRouter.post('/post', (req, res) => {
    res.send('Post API')
})   

//Get all users
userRouter.get('/getAll', (req, res) => {
    res.send('Get All API')
})

//Get a single user
userRouter.get('/getOne/:id', (req, res) => {
    res.send('Get by ID API')
})

//Update details of a user
userRouter.patch('/update/:id', (req, res) => {
    res.send('Update by ID API')
})

//Delete a single user
userRouter.delete('/delete/:id', (req, res) => {
    res.send('Delete by ID API')
})

module.exports = userRouter