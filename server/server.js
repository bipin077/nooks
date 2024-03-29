const express = require("express");
const env = require("./config/envconfig");
const connect = require("./config/dbconfig");
const bodyParser = require('body-parser');
const cors = require("cors");

const bannerRoutes = require("./routes/bannerRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const productRoutes = require("./routes/productRoutes");
const whychooseusRoutes = require("./routes/whyChooseUsRoutes");
const contactRoutes = require("./routes/ContactRoutes");
const profileRoutes = require("./routes/profileRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();

connect();

const port = env.PORT || 5000;

app.use(express.json()); 
// applying middlewares
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

app.use("/api", bannerRoutes);
app.use("/api", categoryRoutes);
app.use("/api", productRoutes);
app.use("/api", whychooseusRoutes);
app.use("/api", contactRoutes);
app.use("/api", profileRoutes);
app.use("/api", userRoutes);
app.use("/api", orderRoutes);

app.listen(port, ()=>{
    console.log(`Server is running on port : http://localhost:${port}`);
})