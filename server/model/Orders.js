const mongoose = require("mongoose");

const OrdersSchema = mongoose.Schema({
    name : {
        type : String
    },
    phone : {
        type : Number
    },
    email : {
        type : String
    },
    country : {
        type : String
    },
    state : {
        type : String
    },
    city : {
        type : String
    },
    address : {
        type : String
    },
    pincode : {
        type : Number
    },
    products : {
        type : Array 
    },
    grand_total : {
        type : Number
    },
    payment_mode : {
        type : String
    },
    payment_status : {
        type : String,
        enum : ["pending", "failed", "success"],
        default : "pending"
    },
    order_note : {
        type : String
    }
}, {timestamps : true});

const OrderModel = mongoose.model("order", OrdersSchema);
module.exports = OrderModel;