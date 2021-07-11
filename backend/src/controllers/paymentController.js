const Payment = require('../models/payment');

//store payment details in the database
const Createpayment = async (req, res) => {
    if (req.body) {
        const payment = new Payment(req.body);
        await payment.save()
            .then(data => {
                res.status(200).send({ data: data });
            }).catch(error => {
                res.status(500).send({ error: error.message });
            });
    }
}


module.exports = {
    Createpayment
};