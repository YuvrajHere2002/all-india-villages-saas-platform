const express = require("express");

const cors = require("cors");

require("dotenv").config();



const villageRoutes = require("./routes/villageRoutes");

const analyticsRoutes = require("./routes/analyticsRoutes");

const authRoutes = require("./routes/authRoutes");

const apiKeyRoutes = require("./routes/apiKeyRoutes");



const app = express();



app.use(cors());

app.use(express.json());



app.use("/api/v1", villageRoutes);

app.use("/api/v1", analyticsRoutes);

app.use("/api/v1", authRoutes);

app.use("/api/v1", apiKeyRoutes);



const PORT = 5000;



app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});