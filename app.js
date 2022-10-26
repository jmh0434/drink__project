'use strict';
const express = require('express');
const session = require('./src/auth/session.js');
const passport = require('./src/auth/passport/local.js');
const db = require('./src/database.js');
const indexPageRouter = require('./src/routes/indexPageRouter.js');
const authRouter = require('./src/routes/authRouter.js'); // 인증관련 라우터
const drinkRouter = require('./src/routes/drinkRouter.js');
const questionRouter = require('./src/routes/admin/question.js');
const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');
db(); //db함수 호출로 연결!
app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static( './src/public' ));

// session과 passport를 먼저 활성화를 해줘야돼!! 
session(app);
// passport는 session을 기반으로 작동하기 떄문에, 반드시 session아래 와야한다.
passport(app);
// router middleware
app.use('/', indexPageRouter());
app.use('/drink', drinkRouter());
app.use('/admin', questionRouter());
app.use('/api/auth', authRouter(passport(app)));
module.exports = app;