const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  detail: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  color: String,
  discount: Number,
  photo: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Product', productSchema); 