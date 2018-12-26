const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log('Connected to MongoDB')
}) 

mongoose.connection.once('open', () =>  {
    console.log(`Mongoose has connected to MongoDB`)
})
mongoose.connection.on('error', (error) => {
    console.error(`MongoDB conncection error!!! ${error}`)
    process.exit(-1)
})

module.exports = mongoose

