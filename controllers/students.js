const Student = require('../models/Student')

const studentsController = {
    index: (req, res) => {
        Student.find({}).populate('martialarts')
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
        const studentId = req.params.studentsId
        Student.findById(studentId).populate('martialarts')
            .then((student) => {
                res.render('students/show', {student: student})
            })
    }
}
module.exports = studentsController