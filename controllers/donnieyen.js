const Donnieyen = require('../models/Donnieyen')

const donnieyenController = {
    index: (req, res) => {
        Donnieyen.find({}).populate('donnieyen')
            .then((donnieyen) => {
                console.log(donnieyen)
                res.render('donnieyen/index', {
                    donnieyen: donnieyen
                })
            })
    },
    new: (req, res) => {
        res.send("Hey this is route on donnieyen")
    },
    show: (req, res) => {
        const donnieyenId = req.params.donnieyenId
        Donnieyen.findById(donnieyenId).populate('donnieyen')
            .then((donnieyen) => {
                res.render('students/show', { donnieyen: donnieyen })
            })
    }
}
module.exports = donnieyenController