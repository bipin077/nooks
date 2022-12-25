const express = require("express");
const multer = require('multer');
const path = require("path");
const {getSingleWhyChooseUs, getAllWhyChooseUs, insertWhyChooseUs, updateWhyChooseUs, deleteWhyChooseUs} = require("../controller/WhyChooseUs");

const route = express.Router();

// set up multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../client/public/upload/whychooseus/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
//create multer instance
var upload = multer({ storage: storage });

route.get("/whychooseus/:id", getSingleWhyChooseUs);
route.get("/whychooseus", getAllWhyChooseUs);
route.post("/whychooseus", upload.single('image'), insertWhyChooseUs);
route.put("/whychooseus/:id", upload.single('image'), updateWhyChooseUs);
route.delete("/whychooseus/:id", deleteWhyChooseUs);

module.exports = route;