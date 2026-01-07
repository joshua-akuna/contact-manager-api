const express = require('express');
const router = express.Router();
const {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
} = require('../controllers/contactController');
const verifyToken = require('../middleware/verifyToken');

router.use(verifyToken);
router.get('/', getContacts);
router.get('/:id', getContact);
router.post('', createContact);
router.put('/:id', updateContact);
router.delete('/:id', deleteContact);

module.exports = router;
