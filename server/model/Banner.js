const mongoose = require("mongoose");

const BannerSchema = mongoose.Schema({
    title_one : {
        type : String,
        required : true
    },
    title_two : {
        type : String,
        required : true
    },
    subtitle : {
        type : String,
        required : true
    },
    image : {
        type : String,
        default : null
    },
    status : {
        type : Boolean,
        required : true
    },
    position : {
        type : String,
        required : true
    }
}, {timestamps : true});

const BannerModel = mongoose.model("banner", BannerSchema);
module.exports = BannerModel;