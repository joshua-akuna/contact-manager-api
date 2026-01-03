const getContacts = (req, res) => {
  res.status(200).json({ message: 'Gets all contacts' });
};

const getContact = (req, res) => {
  res.status(200).json({ message: `Gets contact with id: ${req.params.id}` });
};

const createContact = (req, res) => {
  res.status(201).json({ message: 'Creates a new contact' });
};

const deleteContact = (req, res) => {
  res
    .status(201)
    .json({ message: `Deletes contact with id: ${req.params.id}` });
};

const updateContact = (req, res) => {
  res
    .status(201)
    .json({ message: `Updates contact with id: ${req.params.id}` });
};

module.exports = {
  getContacts,
  getContact,
  createContact,
  deleteContact,
  updateContact,
};
