const quote = require('express').Router();

// GET route for retrieving random quote
quote.get('/', (req, res) => {
  res.status(200).json({ message: 'Get random quote' });
});

// GET route for retrieving all quotes
quote.get('/all', (req, res) => {
  res.status(200).json({ message: 'Get all quotes' });
});

// POST route for adding a new quote
quote.post('/', (req, res) => {
  res.status(201).json({ message: 'Add a quote' });
});

// GET route for retrieving a quote by id
quote.get('/:id', (req, res) => {
  res.status(200).json({ message: `Get quote ${req.params.id}` });
});

// PUT route for updating a quote by id
quote.put('/:id', (req, res) => {
  res.status(200).json({ message: `Update quote ${req.params.id}` });
});

// DELETE route for deleting a quote by id
quote.delete('/:id', (req, res) => {
  res.status(200).json({ message: `Delete quote ${req.params.id}` });
});

module.exports = quote;
