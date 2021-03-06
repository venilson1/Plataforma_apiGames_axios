const multer = require('multer');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const crypto = require('crypto');


const upload = multer({
  dest: path.resolve(__dirname, '..', 'uploads'),
  storage: multer.diskStorage({
    destination: (req, file, cb) => { 
      cb(null, path.resolve(__dirname, '..', 'uploads')); //"./src/uploads/"
    },
    filename: (req, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        if(err) cb(err);

        const filename = `${hash.toString('HEX')}-${file.originalname}`;

        cb(null, filename);
      })
    }
  }),
  limits: { fileSize: 2 * 1024 * 1204 },
  fileFilter: (req, file, cb) => {
    const allowedMimes = [
      'image/jpeg',
      'image/pjpeg',
      'image/png',
      'image/gif'
    ];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(new Error('Invalid file type'));
    }
  }
});

module.exports = upload;