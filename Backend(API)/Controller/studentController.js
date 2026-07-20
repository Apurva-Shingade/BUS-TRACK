const student = require('../Model/studentModel');

// POST API
const add = async (req, res) => {
    const { studentName, studentBatch, studentTechnology, studentEmail, studentPassword } = req.body;
    try {
        const data = new student({
            studentName,
            studentBatch,
            studentTechnology,
            studentEmail,
            studentPassword
        });
        await data.save();
        return res.status(201).json({
            message: "Student information added successfully...!"
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Internal Server Error"
        });
    }
}

// GET API
const getData = async (req, res) => {
    try {
        const data = await student.find();
        res.status(200).send(data);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

// DELETE API
const deleteData = async (req, res) => {
    try {
        const data = await student.deleteOne({ _id: req.params._id });
        if (data.deletedCount === 0) {
            return res.status(404).send({ message: "Student not found" });
        }
        res.status(200).send({ message: "Student Deleted Successfully...!", data })
    }
    catch (error) {
        res.status(500).send(error);
    }
}

// UPDATE API
const updateData = async (req, res) => {
    try {
        const { studentName, studentBatch, studentTechnology, studentEmail, studentPassword } = req.body;
        const data = await student.updateOne(
            { _id: req.params._id },
            {
                $set: { studentName, studentBatch, studentTechnology, studentEmail, studentPassword }
            }
        );
        if (data.matchedCount === 0) {
            return res.status(404).send({ message: "Student not found" });
        }

        if (data.modifiedCount > 0) {
            res.status(200).send({ message: "Student Update Successfully" });
        } else {
            res.status(200).send({ message: "No Changes Found" });
        }

    }
    catch (error) {
        res.status(500).send();
    }
}

module.exports = { add, getData, deleteData, updateData };
