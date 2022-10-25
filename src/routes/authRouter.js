'use strict';
const express = require('express');
const router = express.Router();
const User = require('../models/User.js');
// /api/auth
module.exports = (app) => {
    // 1. 회원가입 : POST /api/auth/new
    router.post('/new', async(req,res) => {
        try{
            const { email, password, userName } = req.body;
            let user = new User({ // mongoose가 javascript객체로 document를 접근할 수 있게 해줌.
                email : email,
                password : password,
                userName : userName,
            })
            let saveUser = await user.save(); //db에 저장! ==> 저장하기전에.. bcrypt사용해야해!
            console.log(saveUser);
        }catch(err){
            return console.log(err);
        }
    })

    // 2. 로그인 : POST /api/auth/local-process
    
    return router;
}

