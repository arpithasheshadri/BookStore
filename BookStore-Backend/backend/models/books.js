import mongoose from "mongoose";

const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    bookName: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    bookImage: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  }
);

const Book = mongoose.model("books", bookSchema);

export default Book;