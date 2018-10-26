const Martialarts = require('../models/Martialarts.js')
const Styles = require('../models/Styles.js')
const Students = require('../models/Students.js')
const mongoose = require('./connections')

const jackieChan = new Students({
    name: "Jackie Chan",
    price: 2500,
})

const Bruce Lee = new Students({
    name: "Bruce Lee",
    price: 5,
})

const Donnie Yen = new Students({
    name: "Bread",
    price: 2.50,
})

const Jet Li = new Students({
    name: "Leather Couch",
    price: 500,
})

const kroger = new Store({
    name: "Kroger",
    location: "Edgewood Shopping Center",
    hours: "Open 24hrs",
    products: [bread, shampoo]
})
const target = new Store({
    name: "Target",
    location: "Edgewood Shopping Center",
    hours: "10am - 11pm Everyday of the week",
    products: [television, uno, laptop]
})

const walmart = new Store({
    name: "Walmart",
    location: "East Atlanta",
    hours: "Open 24 hrs",
    products: [couch, baseballBat]
})

Martialarts.remove({})
    .then(() => Students.insertMany([jackieChan, Bruce Lee, Donnie Yen, Jet Li]))
    .then(() => kroger.save())
    .then(() => target.save())
    .then(() => walmart.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())

