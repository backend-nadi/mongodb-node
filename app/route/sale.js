const express = require('express')
const router = express.Router()
const controller = require('../controller/sale')

router.get('/insert', controller.insert)
router.get('/get', controller.get)


module.exports = router