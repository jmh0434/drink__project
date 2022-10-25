'use strict';
const express = require('express');
const router = express.Router();

module.exports = () => {

    // 메인페이지 GET /index
    router.get('/index', async(req,res) => {
        try{
            let mainPage = await res.status(200).render('index.ejs');
        }catch(err){
            return console.log(err);
        }
    })
    return router;
}