require('dotenv').config();

const config = {
    database: {
        url: process.env.MONGO_DB_URI
    },
    token: {
        secret: process.env.TOKEN_SECRET
    },
    server: {
        port: process.env.SERVER_PORT,
    },
    frontend: {
        dominio: process.env.URL_FRONTEND
    }
}

module.exports = config