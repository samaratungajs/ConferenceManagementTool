const mongoose = require('mongoose');

const EditorSchema = new mongoose.Schema({
    about: { type: String, required: true },
    FromDate: { type: String, required: true },
    ToDate: { type: String, required: true },
    venue: { type: String, required: true },
    sponser: { type: String, required: true },
    speaker: { type: String, required: true },
    Status: { type: String, required: true }

});


const Editor = mongoose.model('editor', EditorSchema);
module.exports = Editor;