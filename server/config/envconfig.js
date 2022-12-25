require("dotenv").config();

const env = {
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL
}

module.exports = env;