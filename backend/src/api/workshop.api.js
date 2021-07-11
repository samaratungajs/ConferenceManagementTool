const express = require('express');
const router = express.Router();
const controller = require('../controllers/workshop.controller');

module.exports = function () {
  router.post('/create', controller.createWorkshop);
  router.get('/all', controller.getAllWorkshops);
  router.get('/:id', controller.getWorkshopById);
  router.get('/', controller.getApprovedWorkshops);
  router.get('/unapproved', controller.getUnapprovedWorkshops);
  router.get('/email/approve/:email', controller.getApproveWorkshopByEmail);
  router.get('/email/unapprove/:email', controller.getUnapproveWorkshopByEmail);
  router.put('/approved/:id', controller.getIdofworkshopsforApprove);
  router.put('/unapproved/:id', controller.getIdofworkshopsforUnapprove);

  return router;
} 