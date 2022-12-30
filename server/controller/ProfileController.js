const Profile = require("../model/Profile");

module.exports.addProfileData = async (req, res) =>
{
    const {details} = req.body;

    const logo = req.file ? req.file.originalname : "";
    const fevicon = req.file ? req.file.originalname : "";

    try 
    {
        const profile = await Profile.create({logo, fevicon, details});
        profile.save();
        return res.status(200).json({msg : "profile inserted successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error", msg : error});
    }
}

module.exports.updateLogo = async (req, res) =>
{
    const id = req.params.id; 
    const logoFile = req.file ? req.file.originalname : "";

    console.log(logoFile);

    try 
    {
        await Profile.updateOne({_id : id }, {$set : {logo : logoFile }});
        return res.status(200).json({msg : "logo updated successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error", msg : error});
    }
}

module.exports.updateFevicon = async (req, res) =>
{
    const id = req.params.id;
    const fevicon = req.file ? req.file.originalname : req.body.fevicon;

    try 
    {
        await Profile.updateOne({_id : id }, {$set : {fevicon}});
        return res.status(200).json({msg : "fevicon updated successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error", msg : error});
    }
}

module.exports.updateDetails= async (req, res) =>
{
    const id = req.params.id;
    const details = req.body.details;

    console.log(details);

    try 
    {
        await Profile.updateOne({_id : id }, {$set : {details : details}});
        return res.status(200).json({msg : "details updated successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error", msg : error});
    }
}

module.exports.getProfileData = async (req, res) =>
{
    try 
    {
        const profile = await Profile.findOne({});
        return res.status(200).json({msg : "Success", profile});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error", msg : error});
    }
}