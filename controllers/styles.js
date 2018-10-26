const Style = require('../models/Style')
const Student = require('../models/Student')

const styleController = {
    index: (req, res) => {
        Style.find({})
            .then(styles => {
                res.send(styles)
            })
    },
    show: (req, res) => {
        const styleId = req.params.styleId
        Style.findById(styleId)
        .then(style => {
            res.render(style)
        })
    }

}

module.exports = styleController