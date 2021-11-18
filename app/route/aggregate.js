const express = require('express')
const router = express.Router()
const controller = require('../controller/aggregate')

router.get('/get', controller.get)
router.get('/project', controller.project)
router.get('/array', controller.array)
router.get('/unwind', controller.unwind)
router.get('/filter', controller.filter)

module.exports = router