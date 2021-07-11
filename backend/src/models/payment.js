const mongoose = require('mongoose');

const PaymentSchema = new mongoose.Schema({
   
    paperid:{type:mongoose.Schema.Types.ObjectId,required:false,ref:'researches'},
    email: {
        type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
       
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    cardholder: { type: "string", required: true, trim: true },
    cardnumber: { type: "string", required: true, trim: true },
    month:{ type: "string", required: true, trim: true },
    year:{ type: "string", required: true, trim: true },
    cvc:{ type: "string", required: true, trim: true }
   
  
    
    

});

const Payment = mongoose.model('payment',PaymentSchema);
module.exports = Payment;