const express = require("express");

const route = express.Router();

const upload = require("multer");

const multer = require("multer");

const verifyToken = require("../Middleware/auth");

const { register, login } = require("../Controller/authController");

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        cb(null, "uploads");

    },

    filename: (req, file, cb) => {

        cb(null, Date.now() + "-" + file.originalname);

    }

});

const Upload = multer({

    storage

});

route.post("/register", Upload.single("image"), register);

route.post("/login", login);

route.get("/profile", verifyToken, (req, res) => {

    res.send({

        message: "Welcome User",

        user: req.user

    });

});

module.exports = route;