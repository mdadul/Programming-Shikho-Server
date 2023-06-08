const cloudinaryModule = require("cloudinary");
const variables = require("./variables");
const cloudinary = cloudinaryModule.v2;

cloudinary.config({
  cloud_name: variables.cloud_name,
  api_key: variables.api_key,
  api_secret: variables.api_secret,
});
