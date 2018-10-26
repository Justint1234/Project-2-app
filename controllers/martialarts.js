const Martialarts= require('../models/Martialarts')

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
        const studentId = req.params.studentsId
        Students.findById(studentId).populate('martialarts')
            .then((store) => {
                res.render('students/show', {student: student})
            })
    }
}
module.exports = studentsController