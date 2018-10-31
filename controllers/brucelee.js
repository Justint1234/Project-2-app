const Brucelee = require('../models/Brucelee')

const bruceleeController = {
    index: (req, res) => {
        Brucelee.find({}).populate('brucelee')
            .then((brucelee) => {
                console.log(brucelee)
                res.render('brucelee/index', {
                    brucelee: brucelee
                })
            })
    },
    new: (req, res) => {
        res.send("Hey this is route on brucelee")
    },
    show: (req, res) => {
        const bruceleeId = req.params.bruceleeId
        Brucelee.findById(bruceleeId).populate('brucelee')
            .then((brucelee) => {
                res.render('students/show', { brucelee: brucelee })
            })
    }
}
module.exports = bruceleeController