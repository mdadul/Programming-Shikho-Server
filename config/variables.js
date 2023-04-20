// default
require('dotenv').config();

const mongoDbUrl = process.env.MONGODB_URL;
const appPort = process.env.APP_PORT;
const authKey = process.env.AUTH_KEY;
const cookieName = process.env.COOKIE_NAME;
const jwtExpiry = process.env.JWT_EXPIRY;

const variables = {
	mongoDbUrl,
    appPort,
    authKey,
    cookieName,
    jwtExpiry
};

module.exports = variables;