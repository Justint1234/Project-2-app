const Styles = require('../models/Styles')

const stylesController = {
    index: (req, res) => {
        Styles.find({})
            .then(styles => {
                res.render('styles/index')
            })
    },
    show: (req, res) => {
        const stylesId = req.params.stylesId
        Styles.findById(stylesId)
            .then(styles => {
                res.render(styles)
            })
    },
    new: (req, res) => {
        const stylesId = req.params.stylesId
        Styles.findById(stylesId)
            .then(styles => {
                res.render(styles)
            })
    },

}

module.exports = stylesController