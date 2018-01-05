const Sequelize = require('../config.js').Sequelize;
const sequelize = require('../config.js').sequelize;
const User = require('./user.js');

const Record = sequelize.define('record', {
  time: Sequelize.INTEGER,
  numberCorrect: Sequelize.INTEGER,
  numberIncorrect: Sequelize.INTEGER,
  score: Sequelize.INTEGER,
  username: Sequelize.DataTypes.STRING,
  operator: Sequelize.DataTypes.STRING
});

Record.sync();

module.exports = Record;