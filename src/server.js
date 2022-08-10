require('dotenv').config()

const express = require('express')
const router = require('./routes')
const cors = require('cors')
const connectToDatabase = require('./database')
const path = require('path')

connectToDatabase()

const app = express()

app.use('/files', express.static(path.resolve(__dirname, 'images')))

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(3333, () => {
    console.log('Server is running...')
})