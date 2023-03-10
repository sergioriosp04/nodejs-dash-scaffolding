require('dotenv').config()

const config = {
    env: process.env.NODE_ENV,
    port: process.env.APP_PORT,
    jwtSecret: process.env.JWT_SECRET,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    dbHost: process.env.DB_HOST,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT,
    dbDatabase: process.env.DB_DATABASE,
    whiteList: process.env.WHITE_LIST,
}

module.exports = config