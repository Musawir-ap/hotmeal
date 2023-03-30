const Mongoose = require("mongoose");

const { Schema } = Mongoose;

const CartItemSchema = new Schema({
  product: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: Number,
  purchasePrice: {
    type: Number,
    default: 0,
  },
  totalPrice: {
    type: Number,
    default: 0,
  },
  priceWithTax: {
    type: Number,
    default: 0,
  },
  totalTax: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    default: CART_ITEM_STATUS.Not_processed,
    enum: [
      CART_ITEM_STATUS.Not_processed,
      CART_ITEM_STATUS.Processing,
      CART_ITEM_STATUS.Shipped,
      CART_ITEM_STATUS.Delivered,
      CART_ITEM_STATUS.Cancelled,
    ],
  },
});

module.exports = mongoose.model("CartItem", CartItemSchema);

const CartSchema = new Schema({
  products: [CartItemSchema],
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now
  }
});
export default new mongoose.model("Cart", CartSchema);
