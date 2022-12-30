const Product = require("../model/Product");
const Category = require("../model/Category");

module.exports.getSingleProduct = async (req, res) =>
{
    const id = req.params.id;
    try 
    {
        const product = await Product.findOne({_id : id});
        return res.status(200).json({msg : "success", product});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.getAllProducts = async (req, res) =>
{
    try 
    {
        const product = await Product.find({});
        return res.status(200).json({msg : "success", product});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.addNewProduct = async (req, res) =>
{
    const {category, name, mrp, price, sku, description, specification, is_trending, is_featured, position, status} = req.body;
    const imagePath = req.file ? req.file.originalname : '';
    console.log(req);
    try 
    {
        const product = await Product.create({image : imagePath , images : imagePath, category, name, mrp, price, sku, description, specification, is_trending, is_featured, position, status});
        product.save();
        return res.status(200).json({msg : "Product Inserted Successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error"+error});
    }
}

module.exports.updateProduct = async (req, res) =>
{
    const id = req.params.id;
    const imagePath = req.file ? req.file.originalname : req.body.image;
    const {category, name, mrp, price, sku, description, specification, is_trending, is_featured, position, status} = req.body;
    try 
    {
        await Product.updateOne({_id : id}, {$set : {image : imagePath, category, name, mrp, price, sku, description, specification, is_trending, is_featured, position, status}});
        return res.status(200).json({msg : "Product Updated Successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.deleteProduct = async (req, res) =>
{
    const id = req.params.id;
    try {
        await Product.deleteOne({_id : id});
        return res.status(200).json({msg : "Product Deleted Successfully"});
    } catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.getProductByCategory = async (req, res) =>
{
    const id = req.params.id;
    try {
        const category = await Category.findOne({_id : id});
        if(category)
        {
            const categoryName = category.title;
            const product = await Product.find({category: categoryName});
            return res.status(200).json({msg : "success", product});
        }   
        else{
            return res.status(404).json({error : "Category not found"});
        } 
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.searchProduct = async (req, res) =>
{
    const query = req.params.query;

    try {
        const product = await Product.find({ "name" : {$regex : query} }); 
        return res.status(200).json({msg : "success", product});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server error"});
    }
}

module.exports.getAllProductsCount = async (req, res) =>
{
    try {
        const count = await Product.find({}).countDocuments();
        return res.status(200).json({msg : "success", count});   
    } 
    catch (error) {
        return res.status(500).json({error : "Technical error."});
    }
}