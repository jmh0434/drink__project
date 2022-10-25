'use strict';
const express = require('express');
const router = express.Router();
const Drink = require('../models/Drink.js'); //db에서 불러와주기!! 

module.exports = () => {

    // 메인페이지 GET /index
    router.get('/index', async(req,res) => {
        try{
            let key = await Drink.findOne().select('-_id -id -food -img -body -cool');
            let drink = await Drink.find().limit(12);
            let keyArr = Object.keys(key.toJSON());
            
            let mainPage = await res.status(200)
            .render('index.ejs', {
                drink : drink,
                keyArr : keyArr,
            });
        }catch(err){
            return console.log(err);
        }
    })
    return router;
}