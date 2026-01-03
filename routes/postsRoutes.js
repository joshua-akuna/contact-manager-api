const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Gets all posts' });
});

router.get('/:id', (req, res) => {
  res.status(200).json({ message: `Gets post with id: ${req.params.id}` });
});

router.post('', (req, res) => {
  res.status(201).json({ message: 'Creates a new post' });
});

router.put('/:id', (req, res) => {
  res.status(201).json({ message: `Updates post with id: ${req.params.id}` });
});

router.delete('/:id', (req, res) => {
  res.status(201).json({ message: `Deletes post with id: ${req.params.id}` });
});

module.exports = router;
