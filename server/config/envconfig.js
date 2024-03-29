require("dotenv").config();

const env = {
    PORT : process.env.PORT,
    DB_URL : process.env.DB_URL,
    JWT_SECRET : process.env.JWT_SECRET
}

module.exports = env;