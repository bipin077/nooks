const mongoose = require("mongoose");
const env = require("./envconfig");

const connect = () =>
{
    mongoose.connect(env.DB_URL).then(()=>
    {
        console.log("Database connected successfully");
    }).catch((error)=>
    {
        console.log("Failed to connect database.");
    })
}

module.exports = connect;