const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const auth = require('../middleware/auth')


router.get('/session', userController.prueba)
router.get('/consultar', auth, userController.consulta)
router.get('/borrar', userController.borrarSession)
router.get('/hash', userController.hash)


router.post('/login', userController.login)
router.delete('/logout', userController.logout)


module.exports = router
