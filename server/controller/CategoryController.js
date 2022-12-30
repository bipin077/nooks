const Category = require("../model/Category");


module.exports.geSingleCategory = async (req, res) =>
{
    const id = req.params.id;
    try 
    {
        const category = await Category.findOne({_id : id});
        return res.status(200).json({msg : "success", category});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.getAllCategories = async (req, res) =>
{
    try 
    {
        const category = await Category.find({});
        return res.status(200).json({msg : "success", category});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.addCategory = async (req, res) =>
{
    const {title, position, status} = req.body;

    const imagePath = req.file ? req.file.originalname : '';
    try 
    {
        const category = await Category.create({image : imagePath, title, position, status});
        category.save();
        return res.status(200).json({msg : "category inseted successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}


module.exports.updateCategory = async (req, res) =>
{
    const id = req.params.id;
    const {title, position, status} = req.body;
    const imagePath = req.file ? req.file.originalname : req.body.image;
    try 
    {
        const category = await Category.updateOne({_id : id }, {$set : {image : imagePath , title, position, status}});
        return res.status(200).json({msg : "category updated successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}


module.exports.deleteCategory = async (req, res) =>
{
    const id = req.params.id;
    try {
        await Category.deleteOne({_id : id});
        return res.status(200).json({msg : "category deleted successfully"});

    } catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.getAllCategoryCount = async (req, res) =>
{
    try {
        const count = await Category.find({}).countDocuments();
        return res.status(200).json({msg : "success", count});   
    } 
    catch (error) {
        return res.status(500).json({error : "Technical error."});
    }
}