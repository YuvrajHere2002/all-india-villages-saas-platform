const express = require("express");

const router = express.Router();



const {

    getAnalytics

} = require("../controllers/analyticsController");



const authMiddleware = require(

    "../middleware/authMiddleware"

);





router.get(

    "/analytics",

    authMiddleware,

    getAnalytics

);





module.exports = router;