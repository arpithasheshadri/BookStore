import mongoose from "mongoose";

const Schema = mongoose.Schema;

const cartSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    book: {
      type: Object,
      required: true,
    },
    quantityToBuy: {
        type: String,
        required: true,
    }
  },
  {
    versionKey: false,
  }
);

const Cart = mongoose.model("cart", cartSchema);

export default Cart;