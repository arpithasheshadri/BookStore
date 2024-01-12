import * as bookService from "../services/book-service.js";
import Cloudinary from "cloudinary";

import { setErrorResponse, setResponse } from "./response-handler.js";

export const addBook = async (req, res) => {
    try {
        let imageString = "";
    const cloudinary = Cloudinary.v2;
    //connection to Cloudinary
    cloudinary.config({
    cloud_name: "dddwi53fm",
    api_key: "826392441131543",
    api_secret: "XQml4kqutjlDCAOMVbIf15-AGls",
    });
    const image = req.file;
    if (image) {
    //save to cloudinary
    await cloudinary.uploader.upload(
        image.path,
        async (err, result) => {
          if (err) {
          console.log("Error occurred while uploading file");
          } else {
           imageString = result.secure_url;
          }} );
    }
    let payload = {
        "bookName": req.body.bookName,
        "bookImage": imageString,
        "author": req.body.author,
        "price": req.body.price
    }
    const newBook = await bookService.createBook(payload);
    setResponse(newBook, res);
    }
    catch(error){
        setErrorResponse('500', "Failed to add book", res);
    }

}

export const getBooks = async (request, response) => {
    try {
      const books = await bookService.fetchBooks();
        setResponse(books, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };