const mongoose = require('mongoose');

const ReseacherSchema = new mongoose.Schema({
    authorname: { type: "string", required: true, trim: true },
    papertitle:{ type: "string", required: true, trim: true },
    email: {
        type: String,
        trim: true,
        lowercase: true,
        required: 'Email address is required',
       
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    Designation: { type: "string", required: true, trim: true },
    noofauthors: { type: "String", required: true, trim: true },
    researchfield:{ type: "String", required: true, trim: true },
    referedby: { type: "String", required: true, trim: true },
    noofpages:{ type: "Number", required: true, trim: true },
    url: { type: "string", required: true, trim: true },
    abstract: { type: "string", required: true, trim: true },
    status: { type: "string", required: true, trim: true },
    payment:{type: "string", required: true, trim: true}
  
    
    

});

const Researcher = mongoose.model('Research',ReseacherSchema);
module.exports = Researcher;