const pool = require("../db");

const { v4: uuidv4 } = require("uuid");





const generateApiKey = async (req, res) => {

    try {

        const userId = req.user.id;





        const apiKey = uuidv4();





        await pool.query(

            `

            INSERT INTO api_keys

            (user_id, api_key)

            VALUES ($1, $2)

            `,

            [userId, apiKey]

        );





        res.json({

            message: "API Key Generated Successfully",

            api_key: apiKey

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};





module.exports = {

    generateApiKey

};