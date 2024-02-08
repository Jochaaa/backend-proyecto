const {Cerveza} = require ('../models/cervezas')

const apiController = {
    async apiGet (req, res){
        const listadoCervezas = await Cerveza.find()
        res.json(listadoCervezas)
    },
    async apiPost (req, res){
            const nuevaCerveza = new Cerveza(req.body)
            await nuevaCerveza.save()
            res.status(201).json(nuevaCerveza)
    },
    async apiPut (req, res){
        await Cerveza.findByIdAndUpdate(req.params.id, req.body)
        const editado = await Cerveza.findById(req.params.id)
        res.status(201).json(editado)
    },
    async apiDelete (req, res){
        await Cerveza.findByIdAndDelete(req.params.id)
        res.status(200).send('Cerveza eliminada')
    }
}

module.exports = apiController