const asyncHandler = require('express-async-handler');
const Quote = require('../models/quote.model');

//@desc Get random quote
//@route GET /api/quote
//@access public
const getRandomQuote = asyncHandler(async (req, res) => {
  const randomQuote = await Quote.aggregate([{ $sample: { size: 1 } }]);
  res.status(200).json(randomQuote[0]);
});

//@desc Get all quotes
//@route GET /api/quote/all
//@access public
const getAllQuotes = asyncHandler(async (req, res) => {
  const allQuotes = await Quote.find();
  res.status(200).json(allQuotes);
});

//@desc Add quote
//@route POST /api/quote
//@access public
const addQuote = asyncHandler(async (req, res) => {
  const { quote, author, date } = req.body;

  if (!quote || !author) {
    res.status(400);
    throw new Error("Quote and author are required");
  }

  const newQuote = await Quote.create({ quote, author, date });

  res.status(201).json(newQuote);
});

//@desc Get quote by id
//@route GET /api/quote/:id
//@access public
const getQuoteById = asyncHandler(async (req, res) => {
  const quote = await Quote.findById(req.params.id);

  if (!quote) {
    res.status(404);
    throw new Error("Quote not found");
  }

  res.status(200).json(quote);
});

//@desc Update quote by id
//@route PUT /api/quote/:id
//@access public
const updateQuoteById = asyncHandler(async (req, res) => {
  const updatedQuote = await Quote.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.status(200).json(updatedQuote);
});

//@desc Delete quote by id
//@route DELETE /api/quote/:id
//@access public
const deleteQuoteById = asyncHandler(async (req, res) => {
  const deletedQuote = await Quote.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedQuote);
});

module.exports = { getRandomQuote, getAllQuotes, addQuote, getQuoteById, updateQuoteById, deleteQuoteById}
