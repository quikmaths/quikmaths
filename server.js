// Dependencies
const express = require('express');
const app = express();
const path = require('path');

const PORT = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '/client/www')));

app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));