const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Weapons = new Schema({
    name: String,
    picture: String,
})

module.exports = mongoose.model('Weapons', Weapons)