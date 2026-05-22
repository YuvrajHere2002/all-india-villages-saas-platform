const pool = require("../db");



const getStates = async (req, res) => {

    try {

        const result = await pool.query(

            "SELECT * FROM states ORDER BY state_name"

        );



        res.json(result.rows);

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};





const getDistricts = async (req, res) => {

    try {

        const stateId = req.params.stateId;



        const result = await pool.query(

            `

            SELECT *

            FROM districts

            WHERE state_id = $1

            ORDER BY district_name

            `,

            [stateId]

        );



        res.json(result.rows);

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};





const getVillages = async (req, res) => {

    try {

        const subdistrictId = req.params.subdistrictId;



        const result = await pool.query(

            `

            SELECT *

            FROM villages

            WHERE subdistrict_id = $1

            ORDER BY village_name

            `,

            [subdistrictId]

        );



        res.json(result.rows);

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};





const searchVillages = async (req, res) => {

    try {

        const query = req.query.q || "";



        const page = parseInt(req.query.page) || 1;



        const limit = 20;



        const offset = (page - 1) * limit;



        const result = await pool.query(

            `

            SELECT

                villages.id,

                villages.village_name,

                subdistricts.subdistrict_name,

                districts.district_name,

                states.state_name

            FROM villages

            JOIN subdistricts

            ON villages.subdistrict_id = subdistricts.id

            JOIN districts

            ON subdistricts.district_id = districts.id

            JOIN states

            ON districts.state_id = states.id

            WHERE villages.village_name ILIKE $1

            LIMIT $2

            OFFSET $3

            `,

            [`%${query}%`, limit, offset]

        );



        res.json({

            current_page: page,

            results: result.rows

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};





const addVillage = async (req, res) => {

    try {

        const {

            village_name,

            village_code,

            subdistrict_id

        } = req.body;



        const result = await pool.query(

            `

            INSERT INTO villages

            (village_name, village_code, subdistrict_id)

            VALUES ($1, $2, $3)

            RETURNING *

            `,

            [

                village_name,

                village_code,

                subdistrict_id

            ]

        );



        res.json({

            message: "Village Added Successfully",

            village: result.rows[0]

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};





module.exports = {

    getStates,

    getDistricts,

    getVillages,

    searchVillages,

    addVillage

};