const express = require('express')
const router = express.Router()
const controller = require('../controller/user')

router.get('/insert', controller.insert)


module.exports = router