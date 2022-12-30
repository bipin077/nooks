const express = require("express");

const {addContactDetails, updateContactDetails, getContactList, updateSocialLinks} = require("../controller/ContactController");


const route = express.Router();

route.get("/contact", getContactList);
route.post("/contact", addContactDetails);
route.put("/contact/:id", updateContactDetails);
route.put("/socialLinks/:id", updateSocialLinks);


module.exports = route;