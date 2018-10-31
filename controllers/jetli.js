const Jetli = require('../models/Jetli')

const jetliController = {
    index: (req, res) => {
        Jetli.find({}).populate('jetli')
            .then((jetli) => {
                console.log(jetli)
                res.render('jetli/index', {
                    jetli: jetli
                })
            })
    },
    new: (req, res) => {
        res.send("Hey this is route on jetli")
    },
    show: (req, res) => {
        const jetliId = req.params.jetliId
        Jetli.findById(jetliId).populate('jetli')
            .then((jetli) => {
                res.render('students/show', { jetli: jetli })
            })
    }
}
module.exports = jetliController