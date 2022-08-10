const express = require('express')
const colors = require('colors')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5000
const app = express()

connectDB ()

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', require('./routes/goalRoutes'))

app.use(errorHandler)

app.get('/', (req, res) => {
     res.json({ message: 'Hello there!', }); });


app.listen(port, () => {
         console.log('Server is running on port '+ port) });
