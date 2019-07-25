const express = require('express');
const connectDB = require('./config/db');

const app = express();

// Connect to DB
connectDB();

app.get('/', (req, res) => res.send('Dev Connector API running...'));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server listening on port ${port}...`));
