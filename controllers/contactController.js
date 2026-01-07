const asyncHandler = require('express-async-handler');
const Contact = require('../model/contactModel');

//@desc Get all contacts
//@route GET /api/v1/contacts
//@access private
const getContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({});
  res.status(200).json(contacts);
});

// @desc Get a single contact
// @route GET /api/v1/contacts/:id
// @access private
const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error('Contact not found');
  }
  res.status(200).json(contact);
});

// @desc Create a new contact
// @route POST /api/v1/contacts
// @access private
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All fields are mandatory!');
  }
  const contact = await Contact.create({ name, email, phone });
  res.status(201).json(contact);
});

// @desc Delete a contact
// @route DELETE /api/v1/contacts/:id
// @access private
const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error('Contact not found');
  }
  const deletedContact = await Contact.findByIdAndDelete(id);
  res.status(200).json(deletedContact);
});

// @desc Update a contact
// @route PUT /api/v1/contacts/:id
// @access private
const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const contact = await Contact.findById(id);
  if (!contact) {
    res.status(404);
    throw new Error('Contact not found');
  }
  const updatedContact = await Contact.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  res.status(200).json(updatedContact);
});

module.exports = {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
};
