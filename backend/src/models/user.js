const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');

const userSchema = new Schema({

    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    usertype : {
        type : String,
        required : true
    }

})

const User = mongoose.model("User",userSchema)

module.exports = User