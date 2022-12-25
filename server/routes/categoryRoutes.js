const express = require("express");
const multer = require('multer');
const path = require("path");
const {geSingleCategory, getAllCategories, addCategory, updateCategory, deleteCategory} = require("../controller/CategoryController");


const route = express.Router();

// set up multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../client/public/upload/category/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
//create multer instance
var upload = multer({ storage: storage })

route.get("/categories/:id", geSingleCategory);
route.get("/categories", getAllCategories);
route.post("/categories", upload.single('image'), addCategory);
route.put("/categories/:id", upload.single('image'), updateCategory);
route.delete("/categories/:id", deleteCategory);

module.exports = route;