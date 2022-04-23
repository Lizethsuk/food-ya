require('dotenv').config();
const cloudinary = require("cloudinary").v2;
const UPLOAD_PRESET = process.env.CLOUDINARY_UPLOAD_PRESET

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
}); 


module.exports = {cloudinary, UPLOAD_PRESET};