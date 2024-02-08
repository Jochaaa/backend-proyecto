const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO_CNN)
        console.log('Se conecto a la base de datos')
    }catch{
        console.log('Error al conectarse a la base de datos')
    }
}

module.exports = {connect}