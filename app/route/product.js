const express = require('express')
const router = express.Router()
const controller = require('../controller/product')

router.get('/insert', controller.create)


module.exports = router