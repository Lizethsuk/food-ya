const imgRouter = require('express').Router();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'dujnwtncj', //process.env.CLOUDINARY_NAME,
    api_key: '542636139781841', //process.env.CLOUDINARY_API_KEY,
    api_secret: 'xkpXm-2oY6qOm20dcQVAbvQpetQ',
});
imgRouter.post('/', async (req, res) => {
    const img = req.body.imagen;
    const response = await cloudinary.uploader.upload(img, {upload_preset: 'rhjanagr'});
    console.log(response.url);
    res.status(200)
})
module.exports= imgRouter
