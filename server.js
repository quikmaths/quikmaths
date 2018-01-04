// Dependencies
const express = require('express');
const app = express();
const path = require('path');
const bodyparser = require('body-parser');
const db = require('./db/helpers.js');
const cookie = require('cookie-parser');
const passport = require('passport');
const session = require('express-session');


app.use(bodyparser.json());
app.use(cookieParser());

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
/*
{
  "username": username,
}
*/
app.post('/user', (req, res) => {
  const username = req.body.username;
  db.getUserByName(username, (results) => {
    res.json(results);
  });
})

// save new record to database
/*
{
  "time": time,
  "numberCorrect": numberCorrect,
  "numberIncorrect": numberIncorrect,
  "score": score,
  "userId": userId,
  "operator": operator
}
*/
app.post('/newRecord', (req, res) => {
  db.addNewRecord(req.body);
  res.send('Record Added to Database');
})

// return all records for a user
/*
{
  "username": username,
  "operator": optional,
  "ascending": boolean
}
*/
app.post('/userRecords', (req, res) => {
  const userId = req.body.userId;
  const ascending = req.body.ascending;
  const operator = req.body.operator
  
  db.getAllRecordsForUser(userId, (records) => {
    if (operator) {
      records = records.filter(record => record.operator === operator);
    }

    if (ascending) {
      records = records.sort((a, b) => {return a.score - b.score});
      res.json(records.slice(0, 100));
    } else {
      let records = records.sort((a, b) => {return b.score - a.score});
      res.json(records.slice(0, 100));
    }
  })
})

// return all records
/*
{
  "operator": optional,
  "ascending": boolean
}
*/
app.post('/allRecords', (req, res) => {
  const ascending = req.body.ascending;
  const operator = req.body.operator;

  db.getAllRecords(records => {
    if (operator) {
      records = records.filter(record => record.operator === operator);
    }
    if (ascending) {
      records = records.sort((a, b) => {return a.score - b.score});
      res.json(records.slice(0, 100));
    } else {
      let records = records.sort((a, b) => {return b.score - a.score});
      res.json(records.slice(0, 100));
    }
  });
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server listening on Port ${PORT}`));