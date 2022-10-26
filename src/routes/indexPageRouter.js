'use strict';
const express = require('express');
const router = express.Router();
const Drink = require('../models/Drink.js'); //db에서 불러와주기!! 

module.exports = () => {

    // 메인페이지 GET /index
    router.get('/index', async(req,res) => {
        try{
            let isLogined;
            console.log(`req.user >> ${req.user}`);
            if(req.user){
                isLogined = "logout";
            }else{
                isLogined = "login";
            }
            console.log(isLogined);

            let key = await Drink.findOne().select('-_id -id -food -img -body -cool -meterial -company -flavour_type -sour');
            // console.log(key);
            let img = await Drink.find().where('img').limit(12);
            let drink = await Drink.find().limit(12);
            let keyArr = Object.keys(key.toJSON());
            
            let mainPage = await res.status(200)
            .render('index.ejs', {
                isLogined : isLogined,
                drink : drink,
                keyArr : keyArr,
            });
        }catch(err){
            return console.log(err);
        }
    })

    // 회원가입 페이지 GET /new/index
    router.get('/new/index', async(req,res) => {
        try{
            let newPage = await res.status(200).render('register.ejs');
        }catch(err){
            return console.log(err);
        }
    })

    // 로그인 페이지 GET /local/index
    router.get('/local/index', async(req,res) => {
        try{
            console.log('로그인 페이지 호출!');
            const loginPage = await res.status(200).render('login.ejs');
        }catch(err){
            return console.log(err);
        }
    })

    // 로그아웃 페이지 /logout
    router.get('/logout', async(req,res) => {
        console.log('로그아웃 호출!');
        req.session.destroy(() => {
            return res.redirect('/index');
        })
    })
    return router;
}