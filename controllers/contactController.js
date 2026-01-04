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
  res.status(200).json({ message: `Gets contact with id: ${req.params.id}` });
};

// @desc Create a new contact
// @route POST /api/v1/contacts
// @access public
const createContact = (req, res) => {
  res.status(201).json({ message: 'Creates a new contact' });
};

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
