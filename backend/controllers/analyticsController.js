const pool = require("../db");



const getAnalytics = async (req, res) => {

    try {

        const states = await pool.query(
            "SELECT COUNT(*) FROM states"
        );



        const districts = await pool.query(
            "SELECT COUNT(*) FROM districts"
        );



        const subdistricts = await pool.query(
            "SELECT COUNT(*) FROM subdistricts"
        );



        const villages = await pool.query(
            "SELECT COUNT(*) FROM villages"
        );



        res.json({

            total_states: states.rows[0].count,

            total_districts: districts.rows[0].count,

            total_subdistricts: subdistricts.rows[0].count,

            total_villages: villages.rows[0].count

        });

    }

    catch (error) {

        res.status(500).json({

            error: error.message

        });

    }

};



module.exports = {

    getAnalytics

};