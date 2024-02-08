const {Schema, model} = require('mongoose')

const schema = new Schema({
  marca: {
    type: String,
    required: true,
    enum: ['Rabieta', 'Pampa', 'Guinness']
  },
  estilo: {
    type: String,
    required: true
  },
  porcentaje: {
    type: Number,
    required: true
  },
  cantidad: {
    type: Number,
    required: true
  }
})  

const Cerveza = model('Cerveza', schema)

module.exports = {Cerveza}