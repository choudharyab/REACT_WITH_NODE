const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const Thread = new mongoose.Schema({
    title:String,
    description: String,
    password:String,
    tags:Array,
    username:String
    
}, { timestamps: true });

const thread = mongoose.model('thread', Thread);

module.exports = thread;