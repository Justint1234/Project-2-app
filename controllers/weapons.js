const Weapons = require('../models/Weapons')

const weaponsController = {
    index: (req, res) => {
        Weapons.find({})
            .then(weapons => {
                res.send(weapons)
            })
    },
    show: (req, res) => {
        const weaponsId = req.params.weaponsId
        Weapons.findById(weaponsId)
            .then(weapons => {
                res.render(weapons)
            })
    },
    new: (req, res) => {
        const weaponsId = req.params.weaponsId
        Weapons.findById(weaponsId)
            .then(weapons => {
                res.render(weapons)
            })
    },

}

module.exports = weaponsController