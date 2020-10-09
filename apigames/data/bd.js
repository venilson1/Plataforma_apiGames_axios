const {Sequelize} = require('sequelize');

const connection = new Sequelize("apigames", "root", "root", {
  host: "localhost",
  dialect: "mysql"
});

module.exports = connection;
