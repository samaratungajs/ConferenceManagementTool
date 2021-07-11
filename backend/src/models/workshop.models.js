const mongoose = require('mongoose');

const WorkshopSchema = new mongoose.Schema({
    conductorName: { type: String, required: true },
    title: { type: String, required: true },
    Oraganization: { type: String, required: true },
    address: { type: String, required: true },
    pNumber: { type: Number, required: true },
    email: { type: String, required: true },
    description: {type: String, required: true},
    link: { type: String, },
    Status: { type: String, required: true }

});


const Workshop = mongoose.model('workshop', WorkshopSchema);
module.exports = Workshop;