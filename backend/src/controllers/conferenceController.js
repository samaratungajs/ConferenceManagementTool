const { response } = require('express');
const conferenceDetails = require('../models/conferenceDetails');

//get conference details
const getConferencedetails = async(req, res) => {
    await conferenceDetails.find({}).populate('conferencedetails', 'about FromDate ToDate venue sponsers speakers status')
        .then(data => {
            res.status(200).send({ data: data });
        }).catch(error => {
            res.status(500).send({ error: error.message });
        });

}


module.exports = {
    getConferencedetails

};