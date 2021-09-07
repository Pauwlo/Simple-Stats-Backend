require('dotenv').config()
const express = require('express')
const router = require('./router')
const Database = require('./Database')

const PORT = process.env.PORT

const app = new express()
app.set('port', process.env.PORT)
app.disable('x-powered-by')

app.use(express.json())
app.use('/', router)
Database.getInstance()

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}...`)
})
