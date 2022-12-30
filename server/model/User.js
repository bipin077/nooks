const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    is_admin : {
        type : Boolean,
        default : false
    }
}, {timestamps : true});

const UserModel = mongoose.model("user", UserSchema);
module.exports = UserModel;