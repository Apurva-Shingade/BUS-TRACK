// JSON -> JavaScript Object Notation

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/IMT2026")
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.log("MongoDB Connection Failed");
    console.log(err.message);
  });

// Multer
app.use("/uploads", express.static("uploads"));

// Routes
const studentRoute = require("./Route/studentRoute");
app.use("/", studentRoute);

const authRoute = require("./Route/uthRoute");
app.use("/", authRoute);

// Default API
app.get("/", (req, res) => {
  res.send("MongoDB Database Connected....!");
});

// Server
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
}); 