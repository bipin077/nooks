const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
    image : {
        type : String,
        default : null
    },
    images : {
        type : String,
        default : null
    },
    category : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    },
    mrp : {
        type : Number,
        required : true
    },
    price : {
        type : Number,
        required : true
    },
    sku : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    specification : {
        type : String,
        required : true
    },
    is_trending : {
        type : Boolean,
        default : false
    },
    is_featured : {
        type : Boolean,
        default : false
    },
    position : {
        type : Number,
        required : true
    },
    status : {
        type : Boolean,
        required : true
    }
});

const ProductModel = mongoose.model("product", ProductSchema);
module.exports = ProductModel;