const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  login: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true
  },
  dtCadastro:{
      type: Date,
      default: Date.now
  }
});

const User = module.exports = mongoose.model('users', UserSchema)

module.exports.get = function (callback, limit) {
    User.find(callback).limit(limit);
}