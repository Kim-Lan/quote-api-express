const quote = require('express').Router();
const { getRandomQuote, getAllQuotes, addQuote, getQuoteById, updateQuoteById, deleteQuoteById } = require('../controllers/quote.controller');

// GET route for retrieving random quote
quote.get('/', getRandomQuote);

// POST route for adding a new quote
quote.post('/', addQuote);

// GET route for retrieving all quotes
quote.get('/all', getAllQuotes);

// GET route for retrieving a quote by id
quote.get('/:id', getQuoteById);

// PUT route for updating a quote by id
quote.put('/:id', updateQuoteById);

// DELETE route for deleting a quote by id
quote.delete('/:id', deleteQuoteById);

module.exports = quote;
