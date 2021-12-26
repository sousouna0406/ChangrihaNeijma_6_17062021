const multer = require("multer");

const mineTypes = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = files.originalname.split("").join("_");
    const extention = mineTypes[files.originalname];
    callback(null, name + Date.now() + "." + extention);
  },
});
module.exports = multer({ storage }).single("image");
