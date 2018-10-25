const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/store-sample')

mongoose.connection.once('open', () =>  {
    console.log(`Mongoose has connected to MongoDB`)
})
mongoose.connection.on('error', (error) => {
    console.error(`MongoDB conncection error!!! ${error}`)
    process.exit(-1)
})

module.exports = mongoose