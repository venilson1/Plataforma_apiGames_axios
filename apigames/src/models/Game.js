const connection = require('../data/bd');
const { Sequelize } = require('sequelize');

const Game = connection.define('Games', {
  title: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  year: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  file: {
    type: Sequelize.STRING,
  }
});

// Game.sync({ force: true }).then(() => {
//   console.log('created table Game');
// });

module.exports = Game;