const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Martialarts = new Schema ({
    origin: String, 
    styles: Number,
    location: String,
    styles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Styles'
        }
    ]

})
module.exports = mongoose.model('Martialarts', Martialarts)