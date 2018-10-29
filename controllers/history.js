const History = require('../models/History')

const martialartsController = {
    index: (req, res) => {
        Martialarts.find({}).populate('students')
            .then((martialarts) => {
                console.log(martialarts)
                res.render('martialarts/index', {
                    martialarts: martialarts
                })
            })
    },
    new: (req, res) => {
        res.send("Hey this is route on martialarts")
    },
    show: (req, res) => {
        const martialartsId = req.params.martialartsId
        Martialarts.findById(martialartsId).populate('martialarts')
            .then((martialarts) => {
                res.render('martialarts/show', { martialarts: martialarts })
            })
    }
}
module.exports = martialartsController