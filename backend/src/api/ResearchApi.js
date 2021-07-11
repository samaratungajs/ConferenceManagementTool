const express = require('express');
const router = express.Router();
const Controller = require('../controllers/researcherController');




module.exports = function () {
    router.post('/create', Controller.CreateResearcher);
    router.get('/get', Controller.getAllReseracher);
    router.get('/getallapproved', Controller.getapprovedpaid);
    router.get('/:id', Controller.getOneSubjectResearch);
    router.put('/update/:id', Controller.approval);
    router.put('/update/disapproved/:id', Controller.disapproval);
    router.delete('/delete/:id', Controller.ondelete);
    router.get('/getnotapproval/:email', Controller.findnotapproval);
    router.get('/get/:email', Controller.findapproval);
    router.put('/updatepayment/:id', Controller.updatepayment);


    return router;
}