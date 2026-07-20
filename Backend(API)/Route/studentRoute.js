const express = require("express");
const route = express.Router();

const { add, getData, deleteData, updateData } = require("../Controller/studentController");

// POST API
route.post("/addStudent", add);

// GET API 
route.get("/getStudent", getData);

// DELETE API
route.delete("/deleteData/:_id", deleteData);

// UPDATE API
route.put("/updateStudent/:_id", updateData);

module.exports = route;
