require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const router = require('./router')

const PORT = process.env.PORT

const app = new express()
app.set('port', process.env.PORT)
app.disable('x-powered-by')

app.use(bodyParser.json())
app.use('/', router)

app.listen(PORT, () => {
	console.log(`App listening on port ${PORT}...`)
})
