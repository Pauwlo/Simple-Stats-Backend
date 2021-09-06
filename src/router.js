const router = require('express').Router()
const playersinfo = require('./playersinfo')

router.post('/playersinfo', playersinfo)

module.exports = router
