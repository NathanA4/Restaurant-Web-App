const mongoose = require('mongoose');

require('dotenv').config({path: './env'})

const db = async() => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.MONGOURL)
        console.log("Connected to DB")
    } catch (error) {
        console.log('Error Connecting to DB', error.message)
    }
}

module.exports = { db };