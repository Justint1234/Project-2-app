const History = require('../models/History')

const historyController = {
    index: (req, res) => {
        History.find({}).populate('history')
            .then((history) => {
                console.log(history)
                res.render('history/index', {
                    history: history
                })
            })
    },
    new: (req, res) => {
        res.send("Hey this is route on history")
    },
    show: (req, res) => {
        const historyId = req.params.historyId
        History.findById(historyId).populate('history')
            .then((history) => {
                res.render('history/show', { history: history })
            })
    }
}
module.exports = historyController