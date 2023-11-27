const connection = require('./config/connection');
require('dotenv').config();

const app = require('./app');
const port = process.env.PORT || 3000;
const URI = process.env.MONGOURI;

// Function to start the server
async function start(){
    try {
        await connection.connectToMongoDB(URI);
        app.listen(port, () => {
            console.log(`Server is running on http://localhost:${port}`);
        });
    } catch (error) {
        console.error('Error starting the server: ', error);
    }
}

start();