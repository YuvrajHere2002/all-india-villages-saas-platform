const express = require("express");

const router = express.Router();



const {

    generateApiKey

} = require("../controllers/apiKeyController");



const authMiddleware = require(

    "../middleware/authMiddleware"

);





router.post(

    "/generate-api-key",

    authMiddleware,

    generateApiKey

);





module.exports = router;