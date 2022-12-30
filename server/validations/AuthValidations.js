const {body} = require("express-validator");


module.exports.registerValidations = [
    body("name").not().isEmpty().trim().escape().withMessage("name is required"),
    body("phone").not().isEmpty().trim().escape().withMessage("phone number is required"),
    body("email").isEmail().normalizeEmail().escape().trim().withMessage("email is not valid"),
    body("password").not().isEmpty().trim().escape().withMessage("password is required")
]

module.exports.loginValidations = [
    body("email").isEmail().normalizeEmail().escape().trim().withMessage("email is not valid"),
    body("password").not().isEmpty().trim().escape().withMessage("password is required")
]