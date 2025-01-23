import mongoose from 'mongoose';
const { Schema } = mongoose;

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

modules.exports = mongoose.model('Quote', quoteSchema);
