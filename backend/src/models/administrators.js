const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    },
    usertype: {
        type: String,
        required: true,
        trim: true
    }

})

const Administrators = mongoose.model("Administration", adminSchema);
module.exports = Administrators;