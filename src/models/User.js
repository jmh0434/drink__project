'use strict';
const mongoose = require('mongoose');
const userSchema = new mongoose.Schema(
    {
        email : {
            type : String,
            required : true,
            unique : true,
            trim : true,
        },
        password : {
            type : String,
            required : true,
        },
        userName : {
            type : String,
            required : true,
        },
        answer : { // 유져가 조사끝나면 
            type : [String],
        },
        result : {
            type : String,
        }
    },
    {
        timestamps : true,
    }
)

module.exports = mongoose.model('User', userSchema);