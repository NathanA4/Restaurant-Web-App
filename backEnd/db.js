const mongoose = require('mongoose');

require('dotenv').config({path: './env'})

const db = async() => {
    try {
        mongoose.set('strictQuery', flase)
        await mongoose.connect(process.env.url)
        console.log("Connected to DB")
    } catch (error) {
        console.log('Error Connecting to DB', error.message)
    }
}
