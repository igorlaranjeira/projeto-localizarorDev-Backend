const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name: String,
    github_username: String,
    bio: String,
    avatar: String,
    techs:[String], //armazena varias stringns
})

module.exports = mongoose.model('dev', DevSchema);