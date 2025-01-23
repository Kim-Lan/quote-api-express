const quote = require('express').Router();

// GET route for retrieving random quote
quote.get('/', (req, res) => {
  res.send('Get random quote');
});

// GET route for retrieving all quotes
quote.get('/all', (req, res) => {
  res.send('Get all quotes');
});

// POST route for adding a new quote
quote.post('/', (req, res) => {

});

// GET route for retrieving a quote by index
quote.get('/:index', (req, res) => {

});

// PUT route for updating a quote by index
quote.put('/:index', (req, res) => {

});

// DELETE route for deleting a quote by index
quote.delete('/:index', (req, res) => {

});

module.exports = quote;
