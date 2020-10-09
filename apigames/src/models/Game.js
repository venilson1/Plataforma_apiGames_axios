const connection = require('../../data/bd');
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
  }
});

// Game.sync({ force: true }).then(() => {
//   console.log('\033[0;34m created table Game');
// });

module.exports = Game;