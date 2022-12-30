const Banner = require("../model/Banner");
const path = require("path");

module.exports.getSingleBanner = async (req, res) =>
{
    const id = req.params.id;
    try {
        const banner = await Banner.findOne({_id : id});
        return res.status(200).json({msg : "success", banner});
    } catch (error) {
        return res.status(500).json({error : "Technical error."});
    }
}

module.exports.getAllBanners = async (req, res) =>
{
    try {
        const banners = await Banner.find({});
        return res.status(200).json({msg : "success", banners});
    } catch (error) {
        return res.status(500).json({error : "Technical error."});
    }
}

module.exports.addBanner = async (req, res) =>
{
    const {title_one, title_two, subtitle, position, status} = req.body;

    console.log(req);

    const imagePath = req.file ? req.file.originalname : '';

    try 
    {
        const banner = await Banner.create({title_one, title_two, subtitle, image : imagePath, position, status});
        banner.save();
        return res.status(200).json({msg : "Banner inserted successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Technical error."+error});
    }
}

module.exports.editBanner = async (req, res) =>
{
    console.log(req.file);

    const {id} = req.params;
    const {title_one, title_two, subtitle, position, status} = req.body;
    const imagePath = req.file ? req.file.originalname : req.body.image;

    try 
    {
        await Banner.updateOne({_id : id}, { $set : { title_one, title_two, subtitle, image : imagePath , position, status }});
        return res.status(200).json({msg : "Banner updated successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Technical error."});
    }
}

module.exports.deleteBanner = async (req, res) =>
{
    const id = req.params.id;
    console.log(id);
    try {
        await Banner.deleteOne({_id : id});
        return res.status(200).json({msg : "Banner deleted successfully"});
    } catch (error) {
        return res.status(500).json({error : "Technical error."});
    }
}

module.exports.getAllBannersCount = async (req, res) =>
{
    try {
        const count = await Banner.find({}).countDocuments();
        return res.status(200).json({msg : "success", count});   
    } 
    catch (error) {
        return res.status(500).json({error : "Technical error."});
    }
}