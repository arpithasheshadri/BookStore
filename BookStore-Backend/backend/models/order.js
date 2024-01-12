import mongoose from "mongoose";

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    books: {
      type: Array,
      required: true,
    },
    details: {
        type: Object,
        required: true,
    }
  },
  {
    versionKey: false,
  }
);

const Order = mongoose.model("order", orderSchema);

export default Order;