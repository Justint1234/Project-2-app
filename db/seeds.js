const Martialarts = require('../models/Martialarts.js')
const Styles = require('../models/Styles.js')
const Students = require('../models/Students.js')
const mongoose = require('./connections')

const jackieChan = new Students({
    name: 'Jackie Chan',
    age: 64,
    dob: 04/7/1954,
    styles: 'Chinese Martial arts, Hapkido, Judo, Taekwondo, Wing Chun, Boxing, etc',
})

const bruceLee = new Students({
    name: "Bruce Lee",
    price: 5,
})

const donnieYen = new Students({
    name: "Donnie Yen",
    price: 2.50,
})

const jetLi = new Students({
    name: "Jet Li",
    price: 500,
})

const wingChun = new Styles({
    name: "Wing Chun",
    location: "Edgewood Shopping Center",
    hours: "Open 24hrs",
    products: [bread, shampoo]
})
const jeetKunD = new Store({
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
    .then(() => Students.insertMany([jackieChan, bruceLee, donnieYen, jetLi]))
    .then(() => kroger.save())
    .then(() => target.save())
    .then(() => walmart.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())

