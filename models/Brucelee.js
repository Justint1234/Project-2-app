const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Brucelee = new Schema({
    name: String,
})

module.exports = mongoose.model('Brucelee', Brucelee)