const pool = require('../db');



const getStates = async (req, res) => {

    try {

        const result = await pool.query(

            'SELECT * FROM states ORDER BY state_name ASC'

        );

        res.json(result.rows);

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};



const getDistricts = async (req, res) => {

    const { stateId } = req.params;

    try {

        const result = await pool.query(

            'SELECT * FROM districts WHERE state_id = $1',

            [stateId]

        );

        res.json(result.rows);

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};



const getVillages = async (req, res) => {

    const { subdistrictId } = req.params;

    try {

        const result = await pool.query(

            'SELECT * FROM villages WHERE subdistrict_id = $1',

            [subdistrictId]

        );

        res.json(result.rows);

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};



const searchVillages = async (req, res) => {

    const { q } = req.query;

    try {

        const result = await pool.query(

            `SELECT
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
            LIMIT 20`,

            [`%${q}%`]

        );

        res.json(result.rows);

    } catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};



const addVillage = async (req, res) => {

    const {

        village_name,

        village_code,

        subdistrict_id

    } = req.body;

    try {

        const result = await pool.query(

            `INSERT INTO villages
            (village_name, village_code, subdistrict_id)
            VALUES ($1, $2, $3)
            RETURNING *`,

            [

                village_name,

                village_code,

                subdistrict_id

            ]

        );

        res.json(result.rows[0]);

    } catch (error) {

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