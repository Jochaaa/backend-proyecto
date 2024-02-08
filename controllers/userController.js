const bcrypt = require('bcryptjs')
const { User } = require('../models/user')
const userController = {
    prueba(req, res) {
        const user = {
            id: "12343",
            name: "jose",
            age: 22,
        }
        req.session.user = user
        res.cookie('cookieUsuario', user.id, { maxAge: 60000 })
        res.json(req.session)
    },
    consulta(req, res) {
        console.log("Llegue al callback")
        res.json({ session: req.session, cookie: req.cookies.cookieUsuario })
    },
    borrarSession(req, res) {
        req.session.destroy()
        res.clearCookie('cookieUsuario')
        res.json({
            msg: "Sesion borrada"
        })
    },
    hash(req, res) {
        const salt = bcrypt.genSaltSync(15)
        const pass = "12343"
        const hash = bcrypt.hashSync(pass, salt)
        const comparacion1 = bcrypt.compareSync(pass, hash)
        res.json({ pass, hash, comparacion1 })
    },
    async register(req, res) {
        const salt = bcrypt.genSaltSync(15)
        const hash = bcrypt.hashSync(req.body.password, salt)
        const nuevoUser = new Usuario({
            name: req.body.name,
            email: req.bodyy.email,
            password: hash
        })
        await nuevoUser.save()
        res.status(201).json(nuevoUser)
    },
    async login(req, res) {
        try {
            const persona = await User.findOne({ email: req.body.email })
            if (persona == null) {
                return res.json({
                    msg: "La contraseña/email son invalidos"
                })
            }
            if (!bcrypt.compareSync(req.body.password, persona.password)) {
                return res.json({
                    msg: "La contraseña/email son invalidos"
                })
            }
            const user = {
                _id: persona._id,
                name: persona.name
            }

            req.session.user = user
            if (req.body.remember) {
                res.cookie('cookieUsuario', req.session.user, { maxAge: 60000 * 60 })
            }
            res.json({
                msg: "Sesion Creada"
            })

        } catch (error) {
            res.json(error)
        }
    },

    logout(req, res) {
        req.session.destroy()
        res.clearCookie('cookieUsuario')
        res.json({
            msg: "Sesion borrada"
        })
    }
}

module.exports = userController
