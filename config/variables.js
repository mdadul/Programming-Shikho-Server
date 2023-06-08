// default
require('dotenv').config();

const mongoDbUrl = process.env.MONGODB_URL;
const appPort = process.env.APP_PORT;
const authKey = process.env.AUTH_KEY;
const cookieName = process.env.COOKIE_NAME;
const jwtExpiry = process.env.JWT_EXPIRY;
const cloud_name = process.env.CLOUD_NAME;
const api_key = process.env.API_KEY;
const api_secret = process.env.API_SECRET;

const variables = {
	mongoDbUrl,
    appPort,
    authKey,
    cookieName,
    jwtExpiry,
    cloud_name,
    api_key,
    api_secret
};

module.exports = variables;