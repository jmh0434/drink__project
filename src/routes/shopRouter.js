'use strict';
const express = require('express');
const router = express.Router();

module.exports = () => {

    // /shop/:area
    router.get('/:area', async(req,res) => {
        try{
            const { area } = req.params;
            console.log(area);
        }catch(err){
            return console.log(err);
        }
    })
    return router;
}