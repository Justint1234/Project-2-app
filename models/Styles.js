const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Styles = new Schema({
    name: String,
    origin: String,
    techniques: String,
    weapons: [], 
})

module.exports = mongoose.model('Styles', Styles)