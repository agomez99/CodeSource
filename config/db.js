require('dotenv').config()

const mongoose = require('mongoose')

const URL = process.env.MONGODB_URL

const connectDB = async () => {
    try {
        await mongoose.connect(URL || MONGOD_URL, {useNewUrlParser: true, 
            useFindAndModify: false,
            useUnifiedTopology: true, useCreateIndex: true})
        console.log('Connected to MongoDB!!!')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB

