const Martialarts = require('../models/Martialarts.js')
const Styles = require('../models/Styles.js')
const Students = require('../models/Students.js')
const mongoose = require('./connections')

const jackieChan = new Students({
    name: 'Jackie Chan',
    age: 64,
    dob: 04 / 7 / 1954,
    styles: 'Chinese Martial arts, Hapkido, Judo, Taekwondo, Wing Chun, Boxing, Drunkboxing',
})

const bruceLee = new Students({
    name: "Bruce Lee",
    age: 'deceased',
    dob: 07 / 20 / 1973,
    styles: 'Jeet Kune Do, Chinese Martial arts, Wing Chun',
})

const donnieYen = new Students({
    name: "Donnie Yen",
    age: 55,
    dob: 07 / 27 / 1963,
    styles: 'Wing Chun, Boxing, Mixed martial arts, Wushu, Taekwondo, Muay Thai, Tai Chi, Wrestling, Jeet Kune Do, Brazilian jiu-jitsu, Judo, Kickboxing, Hapkido, Hung Ga',
})

const jetLi = new Students({
    name: "Jet Li",
    age: 55,
    dob: 04 / 26 / 1963,
    styles: 'Chinese martial arts, Baguazhang, Wushu',
})

const wingChun = new Styles({
    name: "Wing Chun",
    
})
const jeetKuneDo = new Styles({
    name: "Jeet Kune Do",
   
})

const karate = new Style({
    name: "Karate",
    
})

Martialarts.remove({})
    .then(() => Students.insertMany([jackieChan, bruceLee, donnieYen, jetLi]))
    .then(() => Styles.insertMany[Wingchun, jeetKuneDo, Karate])
    .then(() => Wingchun.save())
    .then(() => jeetKuneDo.save())
    .then(() => Karate.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())

