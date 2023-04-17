// default
require('dotenv').config();

const mongoDbUrl = process.env.MONGODB_URL;
const appPort = process.env.APP_PORT;

const variables = {
	mongoDbUrl,
    appPort,
};

module.exports = variables;