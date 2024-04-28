const mongoose = require('mongoose');

const groceryCategories = [
    "Fruits",
    "Vegetables",
    "Dairy",
    "Baby Care",
    "Bakery",
    "Pantry Staples",
    "Snacks & Sweets",
    "Beverages",
    "Frozen Foods",
    "Household & Cleaning",
    "Personal Care & Health"
];

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: groceryCategories
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min :0
  },
  quantity: {
    type: Number,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
