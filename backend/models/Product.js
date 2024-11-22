const mongoose = require('mongoose');
const Category=require('./Category')
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, 
  },
  image: {
    type: String,
    required: true,
  },
  stock: {
    type: Number,
    default: 0,
    min: 0, 
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  }
},{timestamps:true});
const Product = mongoose.model('Product', productSchema);
module.exports=Product

