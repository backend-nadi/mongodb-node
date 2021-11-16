const express = require('express')
const router = express.Router()
const controller = require('../controller/user')

router.get('/insert', controller.insert)
router.get('/get', controller.get)
router.get('/updating',controller.update)
router.get('/updating/:id', controller.updateArrayEach)
router.get('/removing/array/:id', controller.removingArray)


module.exports = router