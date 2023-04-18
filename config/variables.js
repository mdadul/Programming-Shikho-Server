// default
require('dotenv').config();

const mongoDbUrl = process.env.MONGODB_URL;
const appPort = process.env.APP_PORT;
const authKey = process.env.AUTH_KEY;

const variables = {
	mongoDbUrl,
    appPort,
    authKey
};

module.exports = variables;