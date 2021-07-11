const mongoose = require('mongoose');

const conferenceSchema = new mongoose.Schema({
    about: {
        type: String,
        required: true,
        trim: true
    },
    FromDate: {
        type: Date,
        required: true
    },
    ToDate: {
        type: Date,
        required: true
    },
    venue: {
        type: String,
        required: true,
        trim: true
    },
    sponsers: [{
        type: String,
        required: true,
        trim: true
    }],
    speakers: [{
        type: String,
        required: true,
        trim: true
    }],
    status: {
        type: String,
        required: true,
        trim: true
    }
    

})

const conferenceDetails = mongoose.model("conferencedetail", conferenceSchema);
module.exports = conferenceDetails;