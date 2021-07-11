const express = require('express');
const router = express.Router();
const controller = require('../controllers/administratorsController');

module.exports = function() {
    router.post('/create', controller.createadministrator);
    router.get('/', controller.getAllAdministrators);
    router.get('/getadmin/:id', controller.getAdminById);
    router.get('/gettot', controller.getTotalAdministrators);
    router.delete('/delete/:id', controller.deleteAdministrators);
    router.put('/update/:id', controller.updateAdministrator);
    router.get('/conference', controller.getConferencedetails);
    router.put('/approvecd/:id', controller.ApproveConferencedetails);
    router.put('/disapprovecd/:id', controller.DisapproveConferencedetails);
    router.post('/createcon', controller.createConference);

    router.get('/getwcategory/:id', controller.getWorkshopsbyCategory);
    router.get('/wcategorytot/:id', controller.countWorkshopsbyCategory);
    router.get('/getrcategory/:id', controller.getResearchbyCategory);
    router.get('/rcategorytot/:id', controller.countResearchbyCategory);
    router.get('/rpayed/:id', controller.getpaidORnot);
    router.get('/gettotpayment', controller.getTotPaid);

    router.post('/createworkshop', controller.createWorkshop);
    router.post('/createresearcher', controller.CreateResearcher);
    router.post('/createpayment',controller.Createpayment);

    router.get('/getUsertype/:id', controller.getUserTypeById);



    return router;
}