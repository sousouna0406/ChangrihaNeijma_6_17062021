const multer = require("multer");
// dictionnaire des extentions des images
const mineTypes = {
  "image/jpg": "jpg",
  "image/jpeg": "jpeg",
  "image/png": "png",
};
// Multer config
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "images");
  },
  filename: (req, file, callback) => {
    const name = file.originalname.split("").join("_");
    const extention = mineTypes[file.mimetype];
    callback(null, name + Date.now() + "." + extention);
  },
});
module.exports = multer({ storage }).single("image");
