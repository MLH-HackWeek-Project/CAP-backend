const mongoose = require('mongoose')

// The category each user belongs to admin, company or student
const categorySchema = new mongoose.Schema({
	name:{
		required: true,
		type: String
	}
})


// Create models from the schemas
const Category = mongoose.model('Category', categorySchema)


// export the models
module.exports = Category
