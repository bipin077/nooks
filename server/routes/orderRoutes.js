const express = require("express");
const {addNewOrder, getAllOrders, getSingleOrder} = require("../controller/OrdersController");

const route = express.Router();


route.get("/orders", getAllOrders);
route.get("/orders/:id", getSingleOrder);
route.post("/orders", addNewOrder);


module.exports = route;