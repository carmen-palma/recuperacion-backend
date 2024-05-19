const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contactController');

// rutas CRUD
router.get('/contacts', contactController.getAllContacts);
router.post('/contacts', contactController.createContact);
router.get('/contacts/:id', contactController.getContactById);
router.put('/contacts/:id', contactController.updateContactById);
router.delete('/contacts/:id', contactController.deleteContactById);

module.exports = router;