const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect to the database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.json({ "message": "Welcome to the Jungle!" }))

app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))
app.use('/api/contacts', require('./routes/contacts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server starter on port ${PORT}`))