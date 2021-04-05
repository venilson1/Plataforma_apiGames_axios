const multer = require("multer");
const maxSize = 2 * 1024 * 1024;
const { v4: uuidv4 } = require('uuid');

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, uuidv4() + file.originalname);
  },
});

const upload = multer({storage: storage, limits: { fileSize: maxSize }});

module.exports = upload;