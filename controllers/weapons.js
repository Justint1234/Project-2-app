const Weapons = require('../models/Weapons')

const weaponsController = {
    index: (req, res) => {
        Weapons.find({})
            .then(weapons => {
                res.render(`weapons/index`, {
                    weapons: weapons
                })
            })
    },
    show: (req, res) => {
        const weaponsId = req.params.weaponsId
        Weapons.findById(weaponsId)
            .then(weapons => {
                res.send(weapons)
            })
    },
    new: (req, res) => {
        const weaponsId = req.params.weaponsId
        Weapons.findById(weaponsId)
            .then(weapons => {
                res.send(weapons)
            })
    },

}

module.exports = weaponsController