const mongoose = require("mongoose");

const GroupSchema = mongoose.Schema({
  nome: {
    type: String,
    required: true
  },
  users: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: 'users',
    require: true
  },
  dtCadastro: {
    type: Date,
    default: Date.now
  }
});

const Group = (module.exports = mongoose.model("groups", GroupSchema));

module.exports.get = function(callback, limit) {
  Group.find(callback).limit(limit);
};
