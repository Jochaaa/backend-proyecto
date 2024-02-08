const {Schema, model} = require('mongoose')

const schema = new Schema({
  marca: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})  

const User = model('User', schema)

module.exports = {User}