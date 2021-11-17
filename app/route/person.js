const express = require('express')
const router = express.Router()
const controller = require('../controller/person')

router.get('/get', controller.get)
router.get('/update', controller.updateFIeld)
router.get('/get/:id', controller.getById)
router.get('/fullname', controller.changingArray)
router.get('/indexing', controller.getIndexOne)

module.exports = router 