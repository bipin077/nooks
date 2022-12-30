const Contact = require("../model/Contact");

module.exports.getContactList = async (req, res) =>
{
    try {
        const contact = await Contact.findOne({});
        res.status(200).json({msg : "success", contact});
        
    } catch (error) {
        return res.status(500).json({error : "Internal server errror", msg : error});  
    }
}

module.exports.addContactDetails = async (req, res) =>
{
    const {phone1, phone2, email1, email2, address, map} = req.body;
    try 
    {
        const contact = await Contact.create({phone1, phone2, email1, email2, address, map});
        contact.save();
        res.status(200).json({msg : "Contact details inserted successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server errror", msg : error});    
    }
}

module.exports.updateContactDetails = async (req, res) =>
{
    const {phone1, phone2, email1, email2, address, map} = req.body;
    const id = req.params.id; 
    try 
    {
        await Contact.updateOne({_id : id},{$set : {phone1, phone2, email1, email2, address, map}});
        res.status(200).json({msg : "Contact details updated successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server errror", msg : error});    
    }
}

module.exports.updateSocialLinks = async (req, res) =>
{
    const {facebook, instagram, twitter, linkedin, whatsapp, youtube} = req.body;
    const id = req.params.id; 
    try 
    {
        await Contact.updateOne({_id : id},{$set : {facebook, instagram, twitter, linkedin, whatsapp, youtube}});
        res.status(200).json({msg : "Social Links updated successfully"});
    } 
    catch (error) {
        return res.status(500).json({error : "Internal server errror", msg : error});    
    }
}

module.exports.addSocialLinks = async (req, res) =>
{
    
}