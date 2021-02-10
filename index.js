const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
require('dotenv').config()
const eventRouter = require('./routes/event')
const connectDB = require('./config/db');
connectDB()


app.use('/event', eventRouter)

app.listen(PORT, console.log(`Server started at ${PORT}`))