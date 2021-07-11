const express = require('express');
const router = express.Router();
const confcontroller = require('../controllers/conferenceController');

module.exports = function() {
    router.get('/conference', confcontroller.getConferencedetails);


    return router;
}