import mongoose from "mongoose";

const Schema = mongoose.Schema;

const wishlistSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    book: {
      type: Object,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Wishlist = mongoose.model("wishlist", wishlistSchema);

export default Wishlist;