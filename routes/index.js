const router = require('express').Router();

const quoteRouter = require('./quote.routes');

router.use('/quote', quoteRouter);

module.exports = router;
