const express = require('express')
const router = express.Router()
const controller = require('../controller/user')

router.get('/insert', controller.insert)
router.get('/get', controller.get)


module.exports = router