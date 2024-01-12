import Book from "../models/books.js";

export const createBook = async (params = {}) => {
    const book = new Book(params);
    return await book.save();
  };
  
  export const fetchBooks = async () => {
    const book = Book.find();
    return await book;
  };

  export const getBookById = async (id) => {
    const book = Book.findById(id);
    return await book;
  };