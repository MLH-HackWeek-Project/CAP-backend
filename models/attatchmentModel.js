const mongoose = require('mongoose')


// Details on published attatchments
const attachmentsSchema = new mongoose.Schema({

})

const Attachments = mongoose.model('Attachments', attachmentsSchema)

module.exports = Attachments