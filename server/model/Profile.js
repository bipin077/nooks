const mongoose = require("mongoose");

const ProfileSchema = mongoose.Schema({
    logo : {
        type : String,
        default : null
    },
    fevicon : {
        type : String,
        default : null
    },
    details : {
        type : String,
        default : null
    }
}, {timestamps : true});

const ProfileModel = mongoose.model("profile", ProfileSchema);
module.exports = ProfileModel;