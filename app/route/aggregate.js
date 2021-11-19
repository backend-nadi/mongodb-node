const express = require('express')
const router = express.Router()
const controller = require('../controller/aggregate')

router.get('/get', controller.get)
router.get('/project', controller.project)
router.get('/array', controller.array)
router.get('/unwind', controller.unwind)
router.get('/filter', controller.filter)
router.get('/more-array', controller.multipleArray)
router.get('/bucket', controller.bucket)
router.get('/stage', controller.stage)

module.exports = router