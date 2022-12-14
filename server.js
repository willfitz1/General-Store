const express = require('express')
const routes = require('./routes')
const db = require('./db')
const logger = require('morgan')
const cors = require('cors')

const PORT = process.env.PORT || 3001
const app = express()

const { Item } = require('./models/items')

app.use(cors())
app.use(express.json())
app.use(logger('dev'))
app.use(express.urlencoded({ extended: false }))
app.use('/api', routes)

db.on('error', console.error.bind(console, 'MongoDB connectioon error:'))

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))
