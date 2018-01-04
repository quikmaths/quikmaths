// Dependencies
const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./db/helpers.js');

app.use(bodyparser.json());

// Serve up static files
app.use(express.static(path.join(__dirname, '/client/www')));

// Routes for login/signup
app.post('/signup', (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  db.doesUserExist(username, (exists) => {
    if (exists) {
      res.send('user already exists');
    } else {
      
    }
  })
})

app.post('/user', (req, res) => {
  const username = req.body.username;
  db.getUserByName(username, (results) => {
    res.json(results);
  });
})



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));