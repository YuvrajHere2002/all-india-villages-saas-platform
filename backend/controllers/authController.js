const pool = require("../db");

const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");





const register = async (req, res) => {

    try {

        const {

            name,

            email,

            password

        } = req.body;





        const userExists = await pool.query(

            "SELECT * FROM users WHERE email = $1",

            [email]

        );





        if (userExists.rows.length > 0) {

            return res.status(400).json({

                message: "User already exists"

            });

        }





        const hashedPassword = await bcrypt.hash(password, 10);





        const result = await pool.query(

            `

            INSERT INTO users

            (name, email, password)

            VALUES ($1, $2, $3)

            RETURNING id, name, email

            `,

            [

                name,

                email,

                hashedPassword

            ]

        );





        res.json({

            message: "User Registered Successfully",

            user: result.rows[0]

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};







const login = async (req, res) => {

    try {

        const {

            email,

            password

        } = req.body;





        const result = await pool.query(

            "SELECT * FROM users WHERE email = $1",

            [email]

        );





        if (result.rows.length === 0) {

            return res.status(400).json({

                message: "Invalid Credentials"

            });

        }





        const user = result.rows[0];





        const validPassword = await bcrypt.compare(

            password,

            user.password

        );





        if (!validPassword) {

            return res.status(400).json({

                message: "Invalid Credentials"

            });

        }





        const token = jwt.sign(

            {

                id: user.id,

                email: user.email,

                role: user.role

            },

            "supersecretkey",

            {

                expiresIn: "24h"

            }

        );





        res.json({

            message: "Login Successful",

            token

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};







module.exports = {

    register,

    login

};