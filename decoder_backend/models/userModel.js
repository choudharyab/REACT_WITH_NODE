const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const User = new mongoose.Schema({
    email: { type: String, unique: true },
    name: String,
    password:String,
    
}, { timestamps: true });

User.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};


User.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password);
};

const user = mongoose.model('user', User);
module.exports = user;

