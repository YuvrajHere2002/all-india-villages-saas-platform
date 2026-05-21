const express = require('express');

const cors = require('cors');

require('dotenv').config();

const villageRoutes = require('./routes/villageRoutes');

const app = express();

app.use(cors());

app.use(express.json());

app.use('/api/v1', villageRoutes);

app.get('/', (req, res) => {

    res.send('All India Villages API Running 🚀');

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on port ${PORT}`);

});