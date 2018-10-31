const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Jackiechan = new Schema({
    name: String,
})

module.exports = mongoose.model('Jackiechan', Jackiechan)