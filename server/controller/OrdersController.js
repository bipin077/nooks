const Orders = require("../model/Orders");


module.exports.addNewOrder = async (req, res) =>
{
    console.log(req.body);
    const {name, phone, email, country, state, city, address, pincode, products, grand_total, payment_mode, order_note, payment_status} = req.body;
    try 
    {
        const order = await Orders.create({name, phone, email, country, state, city, address, pincode, products, grand_total, payment_mode, order_note, payment_status});
        order.save();
        return res.status(200).json({msg : "Order Placed Successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Technical Error!"+error});
    }
}

module.exports.getAllOrders = async (req, res) =>
{
    try 
    {
        const orders = await Orders.find({}).sort({createdAt : -1});
        return res.status(200).json({msg : "success", orders});
    } 
    catch (error) {
        return res.status(500).json({error : "Technical Error!"});
    }
}

module.exports.getSingleOrder = async (req, res) =>
{
    const id = req.params.id;
    try 
    {
        const order = await Orders.findOne({_id : id});
        return res.status(200).json({msg : "success", order});
    } 
    catch (error) {
        return res.status(500).json({error : "Technical Error!"});
    }
}