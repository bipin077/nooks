const express = require("express");
const multer = require('multer');
const path = require("path");
const {getSingleProduct, getAllProducts, addNewProduct, updateProduct, deleteProduct} = require("../controller/ProductController");

const route = express.Router();


// set up multer
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, '../../client/public/upload/products/'))
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
})
//create multer instance
var upload = multer({ storage: storage })


route.get("/products/:id", getSingleProduct);
route.get("/products", getAllProducts);
route.post("/products", upload.single('image'), addNewProduct);
route.put("/products/:id", upload.single('image'), updateProduct);
route.delete("/products/:id", deleteProduct);

module.exports = route;