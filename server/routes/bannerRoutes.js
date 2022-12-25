const express = require("express");
const multer = require('multer');
const path = require("path");
const {getAllBanners, getSingleBanner, addBanner, editBanner, deleteBanner} = require("../controller/BannerController");

const router = express.Router();

// set up multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../client/public/upload/banners/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
//create multer instance
var upload = multer({ storage: storage })


router.get("/banners", getAllBanners);
router.get("/banners/:id", getSingleBanner);
router.post("/banners", upload.single('image'), addBanner);
router.put("/banners/:id", upload.single('image'), editBanner);
router.delete("/banners/:id", deleteBanner);


module.exports = router;