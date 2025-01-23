//@desc Get random quote
//@route GET /api/quote
//@access public
const getRandomQuote = (req, res) => {
  res.status(200).json({ message: 'Get random quote' });
};

//@desc Get all quotes
//@route GET /api/quote/all
//@access public
const getAllQuotes = (req, res) => {
  res.status(200).json({ message: 'Get all quotes' });
};

//@desc Add quote
//@route POST /api/quote
//@access public
const addQuote = (req, res) => {
  res.status(201).json({ message: 'Add a quote' });
};

//@desc Get quote by id
//@route GET /api/quote/:id
//@access public
const getQuoteById = (req, res) => {
  res.status(200).json({ message: `Get quote ${req.params.id}` });
};

//@desc Update quote by id
//@route PUT /api/quote/:id
//@access public
const updateQuoteById = (req, res) => {
  res.status(200).json({ message: `Update quote ${req.params.id}` });
};

//@desc Delete quote by id
//@route DELETE /api/quote/:id
//@access public
const deleteQuoteById = (req, res) => {
  res.status(200).json({ message: `Delete quote ${req.params.id}` });
};

module.exports = { getRandomQuote, getAllQuotes, addQuote, getQuoteById, updateQuoteById, deleteQuoteById}
