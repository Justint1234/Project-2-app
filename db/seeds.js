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
    age: 'deceased',
    dob: 07/20/1973,
    styles: 'Jeet Kune Do, Chinese Martial arts, Wing Chun',
})

const donnieYen = new Students({
    name: "Donnie Yen",
    age: 55,
    dob: 07/27/1963,
    styles: ,
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
const jeetKuneDo = new Styles({
    name: "Jeet Kune Do",
    location: "Edgewood Shopping Center",
    hours: "10am - 11pm Everyday of the week",
    products: [television, uno, laptop]
})

const karate = new Style({
    name: "Karate",
    location: "East Atlanta",
    hours: "Open 24 hrs",
    products: [couch, baseballBat]
})

Martialarts.remove({})
    .then(() => Students.insertMany([jackieChan, bruceLee, donnieYen, jetLi]))
    .then(() => Styles.insertMany[Wingchun, jeetKuneDo, Karate])
    .then(() => Wingchun.save())
    .then(() => jeetKuneDo.save())
    .then(() => Karate.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())

