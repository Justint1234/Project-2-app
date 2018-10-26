const Student = require('../models/Students')

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
        Students.findById(studentId).populate('martialarts')
            .then((store) => {
                res.render('students/show', {student: student})
            })
    }
}
module.exports = studentsController