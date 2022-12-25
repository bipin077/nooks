const mongoose = require("mongoose");


const WhyChooseSchema = mongoose.Schema({
    image : {
        type : String,
        required : true
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

const WhyChooseModel = mongoose.model("whychooseus", WhyChooseSchema);
module.exports = WhyChooseModel;