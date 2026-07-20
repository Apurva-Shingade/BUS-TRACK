const jwt = require("jsonwebtoken");

const SECRET_KEY = "IMT2026";

const verifyToken = (req, res, next) => {

    const token = req.headers.authorization;

    if (!token) {

        return res.send({

            message: "Token Required"

        });

    }

    try {

        const verify = jwt.verify(token, SECRET_KEY);

        req.user = verify;

        next();

    }

    catch (error) {

        res.send({

            message: "Invalid Token"

        });

    }

}

module.exports = verifyToken;