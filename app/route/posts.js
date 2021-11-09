const express = require('express')
const router = express.Router()
const controller = require('../controller/posts')


router.get('/insert', controller.insert)
router.get('/get', controller.get)
router.put('/update/:id', controller.update)
router.get('/update-array/:id', controller.addMoreArray)

module.exports = router