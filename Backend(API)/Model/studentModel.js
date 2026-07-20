const mongoose = require('mongoose');

const myStudent = mongoose.Schema({
    studentName: String,
    studentBatch: String,
    studentTechnology: String,
    studentEmail: String,
    studentPassword: String

})
module.exports = mongoose.model('student', myStudent);