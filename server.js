// Student Name and Number

// Use express
const express = require('express');
const bodyParser = require('body-parser');

const postgresRoutes = require('./routes/postgresRoutes');

const app = express();
app.use(bodyParser.json());

// Import the routes for Postgres and Mongo
app.use('/postgres', postgresRoutes);

// Listen
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});