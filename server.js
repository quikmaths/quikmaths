// Dependencies
const express = require('express');
const app = express();
const path = require('path');

// Serve up static files
app.use(express.static(path.join(__dirname, '/client/www')));

// Routes

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));