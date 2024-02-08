const { Cerveza } = require('../models/cervezas')

validarID = async (req, res, next) =>{
    try {
        const buscar = await Cerveza.findById(req.params.id)
        if (buscar !== null) {
            next()
        }else{
            res.status(401).json({
                msg: 'El id ' + req.params.id + ' es invalido'
            })
        }
    } catch (error) {
        res.status(401).json(error)
    }
}

module.exports = {validarID}
