const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const History = new Schema({
    name: String,
})

module.exports = mongoose.model('History', History)