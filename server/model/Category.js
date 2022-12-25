const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
    image : {
        type : String,
        default : null
    },
    title : {
        type : String,
        required : true
    },
    position : {
        type : Number,
        required : true
    },
    status : {
        type : Boolean,
        required : true
    }
}, {timestamps : true});

const CategoryModel = mongoose.model("category", CategorySchema);
module.exports = CategoryModel;