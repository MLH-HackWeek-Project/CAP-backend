const mongoose = require('mongoose')


// users in the system both students and companies
const userSchema = new mongoose.Schema({

})

const User = mongoose.model('User', userSchema)

module.exports = User