const imgRouter = require('express').Router();
const cloudinary = require('cloudinary').v2;
const Menu = require('../models/Menu');
const jwt = require('jsonwebtoken');
cloudinary.config({
    cloud_name: 'dujnwtncj', //process.env.CLOUDINARY_NAME,
    api_key: '542636139781841', //process.env.CLOUDINARY_API_KEY,
    api_secret: 'xkpXm-2oY6qOm20dcQVAbvQpetQ',
});
imgRouter.post('/', async (req, res) => {
    const img = req.body.imagen;
    const token = req.body.token;
    const tokenDecode = jwt.verify(token, 'foodya');
    const id = tokenDecode.id;
    const product = req.body.products;
    const response = await cloudinary.uploader.upload(img, {upload_preset: 'rhjanagr'});
    const productImg = { ...product, img: response.url};
    const menu = await Menu.findOne({idRestaurant: id});
    const newProducts = menu.dishes.concat(productImg);
    console.log(newProducts);
    const menuUpdate = await Menu.findOneAndUpdate({idRestaurant: id}, {dishes: newProducts}, {new: true});
    res.status(200).json(menuUpdate);
    
   
})
module.exports= imgRouter
