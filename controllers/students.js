const Students = require('../models/Students')

const studentsController = {
    index: (req, res) => {
        Students.find({}).populate('martialarts')
            .then((students) => {
                console.log(students)
                res.render('students/index', {
                    students: students
                })
            })
    },
    new: (req, res) => {
        res.send("Hey this is route on students")
    },
    show: (req, res) => {
        const studentsId = req.params.studentsId
        Students.findById(studentsId).populate('martialarts')
            .then((students) => {
                res.render('students/show', { students: students })
            })
    }
}
module.exports = studentsController