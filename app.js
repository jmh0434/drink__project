'use strict';
const express = require('express');
const app = express();

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended : true }));
app.use(express.json());
app.use(express.static( './src/public' ));

app.get('/index', async(req,res) => {
    res.render('index.ejs');
})
// clone성공?
app.listen(3000, async() => console.log(`3000 server is open!`))