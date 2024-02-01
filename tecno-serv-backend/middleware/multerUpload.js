const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './image');
  },
  filename: function (req, file, cb) {
    let ahora =  Date.now()
    req.ahora = ahora
    cb(null, ahora + '_' + file.originalname);
  }
}); 
const upload = multer({ storage: storage });

module.exports = upload;
