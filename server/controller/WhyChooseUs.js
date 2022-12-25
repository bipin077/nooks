const WhyChoose = require("../model/WhyChoose");

module.exports.getSingleWhyChooseUs = async (req, res) =>
{
    const id = req.params.id;
    try 
    {
        const whychooseus = await WhyChoose.findOne({_id : id});
        return res.status(200).json({msg : "success", whychooseus});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error", msg : error});
    }
}

module.exports.getAllWhyChooseUs = async (req, res) =>
{
    try 
    {
        const whychooseus = await WhyChoose.find({});
        return res.status(200).json({msg : "success", whychooseus});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error", msg : error});
    }
}

module.exports.insertWhyChooseUs = async (req, res) =>
{
    const {title, position, status} = req.body;
    const imagePath = req.file ? req.file.originalname : '';
    try 
    {
        const whychooseus = await WhyChoose.create({image : imagePath, title, position, status});
        whychooseus.save();
        return res.status(200).json({msg : "Why Choose Us Inserted Successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error", msg : error});
    }
}

module.exports.updateWhyChooseUs = async (req, res) =>
{
    const id = req.params.id;
    const {title, position, status} = req.body;
    const imagePath = req.file ? req.file.originalname : req.body.image;

    try {
        await WhyChoose.updateOne({_id : id}, {$set : {image : imagePath, title, position, status}});
        return res.status(200).json({msg : "Why Choose Us Updated Successfully"});
    } catch (error) {
        return res.status(500).json({error : "Internal server error", msg : error});   
    }
}

module.exports.deleteWhyChooseUs = async (req, res) =>
{
    const id = req.params.id;

    try {
        await WhyChoose.deleteOne({_id : id});
        return res.status(200).json({msg : "Why Choose Us Deleted Successfully"});
    } catch (error) {
        return res.status(500).json({error : "Internal server error", msg : error});   
    }
}