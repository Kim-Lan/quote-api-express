const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const quoteSchema = new Schema({
  quote: {
    type: String,
    required: [true, "Quote required"]
  },
  author: {
    type: String,
    required: [true, "Author required"]
  },
  date: {
    type: Date,
    default: Date.now
  }
},
{
  timestamps: true,
});

module.exports = model('Quote', quoteSchema);
