const asyncHandler = require('express-async-handler');

//@desc Get all contacts
//@route GET /api/v1/contacts
//@access public
const getContacts = (req, res) => {
  res.status(200).json(req.body);
};

// @desc Get a single contact
// @route GET /api/v1/contacts/:id
// @access public
const getContact = (req, res) => {
  res.status(200).json({
    message: `Gets contact with id: ${req.params.id}`,
  });
};

// @desc Create a new contact
// @route POST /api/v1/contacts
// @access public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error('All fields are mandatory!');
  }
  console.log(req.body);
  res.status(201).json({ message: 'Creates a new contact' });
});

// @desc Delete a contact
// @route DELETE /api/v1/contacts/:id
// @access public
const deleteContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Deletes contact with id: ${req.params.id}` });
};

// @desc Update a contact
// @route PUT /api/v1/contacts/:id
// @access public
const updateContact = (req, res) => {
  res
    .status(200)
    .json({ message: `Updates contact with id: ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
};
