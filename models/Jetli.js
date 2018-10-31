const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Jetli = new Schema({
    name: String,
})

module.exports = mongoose.model('Jetli', Jetli)