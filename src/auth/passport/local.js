'use strict';
const passport = require('passport');
const User = require('../../models/User');
const bcrypt = require('bcrypt');
const LocalStrategy = require('passport-local').Strategy;
// social login이 아닌 단순 로컬 로그인 방식을 사용.

module.exports = (app) => {

    app.use(passport.initialize());
    app.use(passport.session());

    passport.use('local', new LocalStrategy(
        // passport.use
        // 간단하게, 입력받은 값들을 가져와서 옳고 그름을 판단해주는 곳. 
        {
            usernameField : 'email',
            passwordField : 'password',
        },
        async(username, password) => {
            console.log(`유져가 입력한 id, pw >> ${username}, ${password}`);

            let user = await User.findOne({email : username});
            if(user){ // 만약에 유져가 있다면...!

            }
        }
    ))
    return passport;
}