const bcrypt = require("bcrypt");

module.exports.hashPassword = (password) =>
{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

module.exports.comparePassword = (newPassword, oldPassword) =>
{
    if(bcrypt.compareSync(newPassword, oldPassword))
    {
        return true;
    }
    else
    {
        return false;
    }
}