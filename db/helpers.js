const User = require('./models/user.js')
const Record = require('./models/records.js')

const doesUserExist = function(username, cb) {
  User.findAll({
    where: {
      "username": username
    }
  })
  .then(results => {
    if (results.length === 0) {
      cb()
    } else {
      console.log('user already exists');
    }
  })
  .catch(err => {
    console.log('error:', err)
  })
}

const addNewUser = function(userInfo) {
  doesUserExist(userInfo.username, () => {
    const newUser = User.build({
      "username": userInfo.username,
      "password": userInfo.password
    })
      .save()
      .then(() => {
        console.log('success');
      })
      .catch(err => {
        console.log('error: ', err);
      })
  })
}
// get userByName
const getUserByName = function(username, cb) {
  User.findAll({
    where: {
      "username": username
    }
  })
  .then(results => {
    if (results.length === 0) {
      console.log('user does not exist')
    } else {
      cb(results);
    }
  })
}

const getAllUsers = function(cb) {
  User.findAll()
      .then(results => {
        cb(results);
      })
      .catch(err => {
        console.log('error: ', err)
      })
}

// update user

// add new record
// get all records for a user
// get all records for an operator
// get all records sorted by score