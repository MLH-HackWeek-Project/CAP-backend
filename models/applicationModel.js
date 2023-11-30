const mongoose = require('mongoose')

// Students applications
const applicationsSchema = new mongoose.Schema({

})

const Applications = mongoose.model('Applications', applicationsSchema)

module.exports = Applications