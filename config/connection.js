const mongoose = require('mongoose');

// Function to connect to MongoDB
async function connectToMongoDB(URI) {
    try {
        await mongoose.connect(URI);
        console.log('Connected to MongoDB.');
    } catch (error) {
        console.error('Error connecting to MongoDB: ', error);
        throw error;
    }
}

// async function connectToDB(URI) {
//     mongoose
//     .connect(URI)
//     .then(() => {
//         console.log('Connected to DB successfully...');
//     })
//     .catch((err) => {
//         console.log(err);
//     });
// }

module.exports = {
    // connectToDB, 
    connectToMongoDB
};