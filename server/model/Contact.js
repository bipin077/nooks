const mongoose = require("mongoose");

const ContactSchema = mongoose.Schema({
    phone1 : {
        type : Number,
        default : null
    },
    phone2 : {
        type : Number,
        default : null
    },
    email1 : {
        type : String,
        default : null
    },
    email2 : {
        type : String,
        default : null
    },
    address : {
        type : String,
        default : null
    },
    map : {
        type : String,
        default : null
    },
    facebook : {
        type : String,
        default : null
    },
    instagram : {
        type : String,
        default : null
    },
    twitter : {
        type : String,
        default : null
    },
    whatsapp : {
        type : String,
        default : null
    },
    linkedin : {
        type : String,
        default : null
    },
    youtube : {
        type : String,
        default : null
    }
});

const ContactModel = mongoose.model("contact", ContactSchema);
module.exports = ContactModel;