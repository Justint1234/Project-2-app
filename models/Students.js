const mongoose = require('../db/connections')
const Schema = mongoose.Schema

const Students = new Schema({
    name: String,
    teachers: [],
    styles: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Styles'
        }
    ]
})

module.exports = mongoose.model('Students', Students)