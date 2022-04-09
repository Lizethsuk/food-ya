const Menu = require('../models/Menu.js');
const menuRouter = require('express').Router();
const joi = require('joi');
const bcrypt = require('bcrypt');

menuRouter.put('/:id', async(req, res) => {
    const {id} = req.params;
    const product = req.body;
    const menu = await Menu.findOne({idRestaurant: id});
    const newProducts = menu.dishes.concat(product);
    const menuUpdate = await Menu.findOneAndUpdate({idRestaurant: id}, {dishes: newProducts}, {new: true});
    res.status(200).json(menuUpdate);

});
menuRouter.post('/:id', async(req, res) => {
    const {id} = req.params;
    const data =req.body;
    const newMenu = Menu({
        idRestaurant: id,
        ...data
    });
    const saveMenu = await newMenu.save();
    res.status(201).json({ message: 'ok', newMenu: saveMenu})

})
menuRouter.get('/', async (req, res)=>{
    const data = await Menu.find({});
    res.status(200).json(data)
})
menuRouter.get('/:id',async (req,res,next)=>{
    const {id} = req.params 
    try{
        const menu = await Menu.findOne({idRestaurant: id})
        if(menu){
            res.status(200).json(menu)
        }
        else{
            res.status(204).end()
        }
    } catch (err) {
        next(err)
    } 
})



module.exports = menuRouter