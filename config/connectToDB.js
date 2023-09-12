// Load environment variables
if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config()
}
const mongoose = require('mongoose')


async function connectToDB() {
    try {
        await mongoose.connect(process.env.DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Connected to database');
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectToDB