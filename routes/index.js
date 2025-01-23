const router = require('express').Router();

const quoteRouter = require('./quote');

router.use('/quote', quoteRouter);

module.exports = router;
