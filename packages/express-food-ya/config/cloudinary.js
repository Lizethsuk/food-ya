const cloudinary = require("cloudinary").v2;
cloudinary.config({
    cloud_name: 'dujnwtncj', //process.env.CLOUDINARY_NAME,
    api_key: '542636139781841', //process.env.CLOUDINARY_API_KEY,
    api_secret: 'xkpXm-2oY6qOm20dcQVAbvQpetQ',
}); 
module.exports = cloudinary;