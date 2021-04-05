const express = require("express");
const gameControllers  = require("../controllers/gameControllers");
const router = express.Router();
const upload = require("../middleware/upload");

  router.get('/games', gameControllers.index);
  router.get('/games/:id', gameControllers.findById);
  router.post('/games', upload.single("files"), gameControllers.create);
  router.put('/games/:id', gameControllers.update);
  router.delete('/games/:id', gameControllers.delete);

module.exports = router;