const express = require('express')
const router = express.Router()
const apiController = require('../controllers/apiController')
const {validarID} = require('../middleware/validarid')
const checks = require('../middleware/checks')
const {validarChecks} = require('../middleware/validarchecks')


router.get('/info', apiController.apiGet)
router.get('/id/:id', validarID)
router.post('/crear', checks, validarChecks, apiController.apiPost)
router.put('/editar/:id', validarID, checks, validarChecks, apiController.apiPut)
router.delete('/borrar:id', validarID, apiController.apiDelete)


module.exports = router