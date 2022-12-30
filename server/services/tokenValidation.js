var jwt = require('jsonwebtoken');
const env = require("../config/envconfig");

module.exports.generateToken = (data) =>
{
    var token = jwt.sign(data, env.JWT_SECRET, { expiresIn : "7d"});
    return token;
}