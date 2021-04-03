const express = require("express");
const { default: gameControllers } = require("../controllers/gameControllers");
const router = express.Router();

let routes = (app) => {

  app.get('/games', gameControllers.index);
  app.get('/games/:id', gameControllers.findById);
  app.post('/games', gameControllers.create);
  app.put('/games/:id', gameControllers.update)
  app.delete('/games/:id', gameControllers.delete)

  app.use(router);
};

module.exports = routes;