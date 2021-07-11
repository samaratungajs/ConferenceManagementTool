const mongoose = require('mongoose');

const AttendeeSchema = new mongoose.Schema({
    attendeeName: { type: String, required: true },
    address: { type: String, required: true },
    pNumber: { type: Number, required: true },
    email: { type: String, required: true },
    profession: {type: String, required: true},
    cardholder: { type: "string", required: true, trim: true },
    cardnumber: { type: "string", required: true, trim: true },
    month: { type: "string", required: true, trim: true },
    cvc: { type: "string", required: true, trim: true }

});


const attendee = mongoose.model('attendee', AttendeeSchema);
module.exports = attendee;