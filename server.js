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

// checks if username exists. if it doesn't it create the user in db
app.post('/signup', (req, res) => {
  db.doesUserExist(req.body.username, (exists) => {
    if (exists) {
      res.json('Username Already Exists');
    } else {
      db.addNewUser(req.body)
      res.json('User Account Created');
    }
  })
})

// returns all information about user that exists in database
app.post('/user', (req, res) => {
  const username = req.body.username;
  db.getUserByName(username, (results) => {
    res.json(results);
  });
})

// save new record to database
app.post('newRecord', (req, res) => {
  db.addNewRecord(req.body);
  res.send('Record Added to Database');
})



const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));