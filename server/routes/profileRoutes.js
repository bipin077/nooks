const express = require("express");
const multer = require('multer');
const path = require("path");

const {addProfileData, updateLogo, updateFevicon, updateDetails, getProfileData} = require("../controller/ProfileController");


const route = express.Router();

// set up multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../client/public/upload/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
//create multer instance
var upload = multer({ storage: storage })

route.post("/profile", addProfileData);
route.get("/profile", getProfileData);
route.put("/updateLogo/:id", upload.single('logo'), updateLogo); 
route.put("/updatefevicon/:id", upload.single('fevicon'), updateFevicon);
route.put("/updatedetails/:id", updateDetails);


module.exports = route;