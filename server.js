// Dependencies
const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./db/helpers.js');

app.use(bodyparser.json());

// Serve up static files
app.use(express.static(path.join(__dirname, '/client/www')));

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
app.post('/newRecord', (req, res) => {
  db.addNewRecord(req.body);
  res.send('Record Added to Database');
})

// return all records for a user
app.post('/userRecords', (req, res) => {
  const userId = req.body.userId;
  const ascending = req.body.ascending;
  const operator = req.body.operator
  
  db.getAllRecordsForUser(userId, (records) => {
    if (operator) {
      let filteredRecords = records.filter(record => record.operator === operator);
      if (ascending) {
        let sortedRecords = filteredRecords.sort((a, b) => {return a.score - b.score});
        res.json(sortedRecords.slice(0, 100));
      } else {
        let sortedRecords = filteredRecords.sort((a, b) => {return b.score - a.score});
        res.json(sortedRecords.slice(0, 100));
      }
    }
  })
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));