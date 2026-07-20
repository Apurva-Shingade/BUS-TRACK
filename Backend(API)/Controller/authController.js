const user = require("../Model/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SECRET_KEY = "IMT2026";


// Register

const register = async (req, res) => {

    try {

        const { username, email, password } = req.body;

        const hashPassword = await bcrypt.hash(password, 10);

        const data = new user({

            username,

            email,

            password: hashPassword,

            image: req.file.filename

        });

        await data.save();

        res.status(201).send({

            message: "Register Successfully"

        });

    }
    catch (error) {

        res.status(500).send(error);

    }

};



// Login

const login = async (req, res) => {

    try {

        const { email, password } = req.body;

        const data = await user.findOne({ email });

        if (!data) {

            return res.send({

                message: "Email Not Found"

            });

        }

        const check = await bcrypt.compare(password, data.password);

        if (!check) {

            return res.send({

                message: "Password Wrong"

            });

        }

        const token = jwt.sign(

            { id: data._id },

            SECRET_KEY,

            { expiresIn: "1h" }

        );

        res.send({

            message: "Login Successfully",

            token

        });

    }
    catch (error) {

        res.status(500).send(error);

    }

};

module.exports = { register, login };