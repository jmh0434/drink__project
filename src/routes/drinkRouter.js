'use strict';
// /drink 관련 라우터
const express = require('express');
const router = express.Router();
const Drink = require('../models/Drink.js');
// 술 검색 
// 1. query문 ? /drink ? title = ""
// 2. params /drink/:id

function isLogined(value){
    let logined = value === true ? value = "logout" : value = "login";
    return logined;
}

module.exports = () => {

    // 1. query검색
    router.get('/', async(req,res) => {
        try{
            // query문은 그냥 /drink에 ?로 따라오는거라 ?부분은 req.query에 담아주면돼!
            let { title } = req.query;
            // 실제 값 
            let findAll = await Drink.find(); // 전체 다 출력!
            // console.log(findAll); // [{}, {}, {}, {}]
            let resultArr = findAll.filter((ele) => {
                return ele.title.includes(title) === true;
                // 전체 문자중에 filter로 값 거르기!!!!! ===> javascript의 중요성
                // 값을 서버에서 전부 다 함수를 사용해서 조립해주는.. 역할
            })
            // 속성값만 찾아오기...!!
            let property = await Drink.findOne().select('title price volume -_id');
            let pro = Object.keys(property.toJSON());
            console.log(pro);
            console.log('속성!!!!!');
            console.log(property);
            // 이제 찾아줬으면 page! 
            let resultRender = await res.status(200).render('drinkResult.ejs',{
                isLogined : isLogined(req.user),
                property : pro,
                drink : resultArr,
            });

    
        }catch(err){
            return console.log(err);
        }
    })
    return router; 
}