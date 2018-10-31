const Jackiechan = require('../models/Jackiechan')

const jackiechanController = {
    index: (req, res) => {
        Jackiechan.find({}).populate('jackiechan')
            .then((jackiechan) => {
                console.log(jackiechan)
                res.render('jackiechan/index', {
                    jackiechan: jackiechan
                })
            })
    },
    new: (req, res) => {
        res.send("Hey this is route on jackiechan")
    },
    show: (req, res) => {
        const jackiechanId = req.params.jackiechanId
        Jackiechan.findById(jackiechanId).populate('jackiechan')
            .then((jackiechan) => {
                res.render('students/show', { jackiechan: jackiechan })
            })
    }
}
module.exports = jackiechanController