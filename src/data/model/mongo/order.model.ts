import mongoose from 'mongoose';
const { Schema } = mongoose;

const orderSchema = new Schema({
    productId: Schema.Types.ObjectId,
    quantity: {
        type: Number,
        min: 0,
    },
    orderBy: {
        type: String,
        required: true
    },
    orderConfirmed: {
        type: Boolean,
        default: false
    },
});

const OrderModel = mongoose.model('order', orderSchema, "order");
export default OrderModel;