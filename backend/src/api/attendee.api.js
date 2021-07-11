const express = require('express');
const router = express.Router();
const controller = require('../controllers/attendee.contorl');

module.exports = function () {
  router.post('/create-attendee', controller.createAttendee);
  router.get('/getallattendee', controller.getAllAttendee);
  router.get('/getattendee/:id', controller.getAllAttendee);

  return router;
} 