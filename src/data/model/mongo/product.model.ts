import mongoose from 'mongoose';
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  pictureUrl: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    min: 0,
  },
  quantity: {
    type: Number,
    min: 0,
  },
  status: {
    type: Boolean,
    default: true

  }
});

const ProductModel = mongoose.model('product', productSchema, "product");
export default ProductModel;