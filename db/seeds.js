const Martialarts = require('../models/Martialarts.js')
const Styles = require('../models/Styles.js')
const Students = require('../models/Students.js')
const Weapons = require('../models/Weapons.js')
const mongoose = require('./connections')

const jackieChan = new Students({
    name: 'Jackie Chan',
    age: 64,
    dob: 04 / 7 / 1954,
    styles: 'Chinese Martial arts, Hapkido, Judo, Taekwondo, Wing Chun, Boxing, Drunkboxing',
    facts: 'Chan Kong-san or otherwise known as Jackie Chan is one of the most widely known martial arts actors. Born in Hong Kong, China, Chan started studying martial arts, singing, drama, and acrobatics at the age of 7. Jackie began his acting career in 1962 as an extra in a chinese movie called Big and Little Wong Tin Bar. A decade later chan would go on to star as a stuntman for one the most iconic names in kung fu movies of all time, Bruce Lee. As a stuntman in Fists of Fury and Enter the Dragon chan grew to respect Bruce Lee deeply, seeing as how everybody including himself saw how legendary Bruce Lee was. Years later starring in 100+ movies Jackie has made himself an icon with his own unique style he brings to the bring screen. His mix of martial arts and quirkyness caught the attention of many and has always been known as one of the top martial arts actors. Its no secret that in movies actors will have stunt doubles to perform dangerous stunts for them to be safe. Thats not the case for Jackie, after being inspired by Bruce Lee, Jackie vowed to do all of his own stunts himself and show the world he was fearless. Winning many awards Chan has put his heart and soul into making classic movies we will forever remeber, classics such as Rush hour 1-3, Rumble in the Bronx, Drunken Master, and The Legend of The Drunken Master, The Medallion, Shanghai Knights, and many more.',
})

const bruceLee = new Students({
    name: "Bruce Lee",
    age: 'Deceased',
    dob: 07 / 20 / 1973,
    styles: 'Jeet Kune Do, Chinese Martial arts, Wing Chun',
    facts: 'Lee Jun-fan or as most call him Bruce Lee, known all over the world as one of the greatest martial arts fighters ever, he has left a very lasting impact on the movie industry inspiring actors everywhere. Lee began his acting career as young boy thanks to his father, starring in several movies. At the age of 18 he moved back to the US and attended the University of Washington in Seattle. He has starred in classic movies such as The Big Boss, Way of the Dragon, The Game of Death, and his 2 most popular movies Fists of Fury and Enter The Dragon. To this day tv shows, movies, amd video games remember Bruce Lee by having characters look like him, imitate the sounds he used to make when striking a foe, his stance, or even his legendary yellow outfit he wore in The Game of Death. He has touched the hearts of many including one other famous actor, Jackie Chan. Despite dying at such a young age Bruce Lee still inspires upcoming actors to become the best they can, not to mention they still make characters favoring Lee in video games. Lee was an amazing person, not just for his knowledge and wisdom, but for his physical capabilities. Lee is regarded as borderline superhuman for good reasons. Lee once fought Vic Moore, a 10th-degree black belt. It was said that Lee threw 8 punches at Moore who failed to block not a single blow after he knew they were coming. In movies we see that Bruce Lee is pretty fast but little do people know he was fast his fight scenes had to be slowed down because if not it would look like a blur on screen. Despite having such speed and strength, his accuracy was incredible. He once used a pair of chopsticks throw and catch a single grain of rice, not only that, still using chopsticks he would snatch a coin and replace it with another coin in a persons hand. If thats not insane he could also do push ups with just his thumb and index finger and also did 50 one-armed chin ups.' , 
})

const donnieYen = new Students({
    name: "Donnie Yen",
    age: 55,
    dob: 07 / 27 / 1963,
    styles: 'Wing Chun, Boxing, Mixed martial arts, Wushu, Taekwondo, Muay Thai, Tai Chi, Wrestling, Jeet Kune Do, Brazilian jiu-jitsu, Judo, Kickboxing, Hapkido, Hung Ga',
    facts: 'Donnie Yen Ji-dan a successful actor and martial artist in Asia. Born in Guangzhou, China ' ,
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

const karate = new Styles({
    name: "Karate",
    
})

const weapon1 = new Weapons({
    name: 'katana',
})

Martialarts.remove({})
    .then(() => Students.insertMany([jackieChan, bruceLee, donnieYen, jetLi]))
    .then(() => Styles.insertMany([Wingchun, jeetKuneDo, Karate])
    .then(() => Weapons.insertMany([weapon1, sai])
    .then(() => Wingchun.save())
    .then(() => jeetKuneDo.save())
    .then(() => Karate.save())
    .then(() => console.log("Database seeded success"))
    .then(() => mongoose.connection.close())))
