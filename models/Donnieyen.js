const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Donnieyen = new Schema({
    name: String,
})

module.exports = mongoose.model('Donnieyen', Donnieyen)