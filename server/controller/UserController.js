const User = require("../model/User");
const {validationResult} = require("express-validator");
const {hashPassword, comparePassword} = require("../services/hashedPassword");
const {generateToken} = require("../services/tokenValidation");

module.exports.register = async (req, res) =>
{
    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        const {name, phone, email, password} = req.body;
        try 
        {
            const hashed = hashPassword(password);
            const user = await User.create({name, phone, email, password : hashed});
            user.save();
            const token= generateToken({email});
            return res.status(200).json({msg : "Account created successfully", token});
        } 
        catch (error) {
            return res.status(500).json({error : "Internal server error"+error});
        }
    }
    else
    {
        return res.status(401).json({error : errors.array()});
    }
}

module.exports.login = async (req, res) =>
{
    const errors = validationResult(req);
    if(errors.isEmpty())
    {
        const {email, password} = req.body;
        try 
        {
            const user = await User.findOne({email});
            if(user)
            {
                if(comparePassword(password, user.password))
                {
                    const token= generateToken({email});
                    return res.status(200).json({msg : "Login Success", token, user}); 
                }
                else
                {
                    return res.status(401).json({error : [{error : "Password is incorrect."}]});
                }
            }
            else
            {
                return res.status(401).json({error : [{error : "Please enter correct email and password."}]});
            }
        } 
        catch (error) {
            return res.status(500).json({error : "Internal server error"});
        }
    }
    else
    {
        return res.status(401).json({error : errors.array()});
    }
}