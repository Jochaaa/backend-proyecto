const express = require('express')
const router = express.Router()
const { index } = require('../controllers/indexController')


router.get('/hello', index)


module.exports = router