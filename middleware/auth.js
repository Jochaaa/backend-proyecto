module.exports = (req, res, next) => {
    console.log("Estoy en el middleware")
    if(!req.session.user){
        res.json({
            msg: "no hay ningun usuario dentro de la sesion"
        })
    }else{
        next()
    }
}