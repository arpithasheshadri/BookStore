import * as wishlistService from '../services/wishlist-service.js';
import * as bookService from '../services/book-service.js';

import { setErrorResponse, setResponse } from "./response-handler.js";


export const addWishlist = async (request, response) => {
    try {
        const bookId = request.params.id;
        const params = request.headers.email;

        const bookToAdd = await bookService.getBookById(bookId);
        let payload = {
            email: params,
            book: bookToAdd
        }
        const addedBook = await wishlistService.addToWishlist(payload);
        setResponse(addedBook, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };

  export const getWishlist = async (request, response) => {
    try {
        // const bookId = request.params.id;
        const params = request.headers.email;

        const wishlistBooks = await wishlistService.getWishlistItems(params);
        setResponse(wishlistBooks, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };

  export const removeWishlist = async (request, response) => {
    try {
        // const bookId = request.params.id;
        const wishlistId = request.params.id;
        const wishlistBooks = await wishlistService.removeWishlistItem(wishlistId);
        setResponse({}, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };