const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
    try {
        await mongoose.connect(db)
        console.log('MongoDB connected...')
    } catch (err) {
        console.log(err)
        // Saindo do processo indicando falha
        process.exit(1)
    }
}

module.exports = connectDB