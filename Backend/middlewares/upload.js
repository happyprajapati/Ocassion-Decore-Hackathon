const multer = require("multer");
const fs = require("fs");
const filepath = require("path");

const filter = (req, file, cb) => {
  if (
    file.mimetype == "image/png" ||
    file.mimetype == "image/jpeg" ||
    file.mimetype == "image/jpg"
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const limit = (req, file, cb) => {
  if (file.fileSize == 1024 * 1024) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const checkDir = (name) => {
  const dir = filepath.join(__dirname, `../public/images/${name}`)
    fs.exists(dir, (exists)=>{
      if(exists){
        return
      }else{
        fs.mkdir(dir, (err)=>{
          if(err){
            console.log("Error in folder creation")
            return
          }
          return
        })
      }
    })
  }

const proofstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    checkDir("proof")
    cb(null, "../public/images/proof");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      // Date.getDate() +
      //   "-" +
      //   `${date.getMonth() + 1}` +
      //   "-" +
      //   date.getFullYear() +
      //   "_" +
        file.fieldname +
        "_" +
        file.originalname
    );
  },
});

const proof = multer({
  storage: proofstorage,
  fileFilter: filter,
  limits: limit,
});

const sliderimgstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    checkDir("sliderImage")
    cb(null, filepath.join(__dirname, "../public/images/sliderImage"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const sliderImage = multer({
  storage: sliderimgstorage,
  fileFilter: filter,
  limits: limit,
});

const eventimgstorage = multer.diskStorage({
  destination: (req, file, cb) => {
    checkDir("eventImage")
    cb(null, filepath.join(__dirname, "../public/images/eventImage"));
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const eventImage = multer({
  storage: eventimgstorage,
  fileFilter: filter,
  limits: limit,
});

module.exports = { proof, sliderImage, eventImage };
