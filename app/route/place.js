const express = require('express')
const router = express.Router()
const controller = require('../controller/place')

router.get('/insert', controller.insert)
router.get('/get', controller.get)
router.get('/get-distance', controller.getKm)

module.exports = router