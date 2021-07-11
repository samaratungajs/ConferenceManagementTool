const express = require('express');
const router = express.Router();
const controller = require('../controllers/editor.controller');

module.exports = function () {
  router.post('/create', controller.createEditor);
  router.get('/all', controller.getAllDetails);
  router.get('/editDetails', controller.editDetails);
  router.get('/:id', controller.getEditorById);
  router.put('/update/:id', controller.updateDetails);
  
  return router;
} 