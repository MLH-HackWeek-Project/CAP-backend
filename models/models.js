const mongoose = require('mongoose')

// The category each user belongs to admin, company or student
const categorySchema = new mongoose.Schema({
	
})

// users in the system both students and companies
const userSchema = new mongoose.Schema({

})

// Details on published attatchments
const attachmentsSchema = new mongoose.Schema({
	
})

// Students applications
const applicationsSchema = new mongoose.Schema({
	
})


// Create models from the schemas
const Category = mongoose.model('Category', categorySchema)
const User = mongoose.model('User', userSchema)
const Attachments = mongoose.model('Attachments', attachmentsSchema)
const Applications = mongoose.model('Applications', applicationsSchema)


// export the models
module.exports = {Category, User, Attachments, Applications}
