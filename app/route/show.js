const express = require('express')
const router = express.Router()
const controller = require('../controller/show')



router.get('/get', controller.get)
router.get('/comparasion', controller.comparasion)
router.get('/embeded', controller.embededquery)
router.get('/regex', controller.regex)

module.exports = router