const Martialarts = require('../models/Martialarts.js')
const Styles = require('../models/Styles.js')
const Students = require('../models/Students.js')
const mongoose = require('./connections')

const jackieChan = new Students({
    name: 'Jackie Chan',
    age: 64,
    dob: 04 / 7 / 1954,
    styles: 'Chinese Martial arts, Hapkido, Judo, Taekwondo, Wing Chun, Boxing, Drunkboxing',
    facts: 'Chan Kong-san or otherwise known as Jackie Chan is one of the most widely known martial arts actors. Born in Hong Kong, China, Chan started studying martial arts, singing, drama, and acrobatics at the age of 7. Jackie began his acting career in 1962 as an extra in a chinese movie called Big and Little Wong Tin Bar. A decade later chan would go on to star as a stuntman for one the most iconic names in kung fu movies of all time, Bruce Lee. As a stuntman in Fists of Fury and Enter the Dragon chan grew to respect Bruce Lee deeply, seeing as how everybody including himself saw how legendary Bruce Lee was. Years later starring in 100+ movies Jackie has made himself an icon with his own unique style he brings to the bring screen. His mix of martial arts and quirkyness caught the attention of many and has always been known as one of the top martial arts actors. Its no secret that in movies actors will have stunt doubles to perform dangerous stunts for them to be safe. Thats not the case for Jackie, after being inspired by Bruce Lee, Jackie vowed to do all of his own stunts himself and show the world he was fearless. Winning many awards Chan has put his heart and soul into making classic movies we will forever remeber, classics such as Rush hour 1-3, Rumble in the Bronx, Drunken Master, and The Legend of The Drunken Master, The Medallion, Shanghai Knights, and many more.' , 
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

