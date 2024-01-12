import * as cartService from '../services/cart-service.js';
import * as bookService from '../services/book-service.js';

import { setErrorResponse, setResponse } from "./response-handler.js";


export const addCart = async (request, response) => {
    try {
        const bookId = request.params.id;
        const params = request.headers.email;

        const bookToAdd = await bookService.getBookById(bookId);
        console.log(bookToAdd);
        let payload = {
            email: params,
            book: bookToAdd,
            quantityToBuy: 1
        }

        const addedBook = await cartService.addToCart(payload);
        setResponse(addedBook, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };

  export const getCart = async (request, response) => {
    try {
        // const bookId = request.params.id;
        const params = request.headers.email;

        const cartBooks = await cartService.getCartItems(params);
        
        setResponse(cartBooks, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };

  export const updateCartQuantity = async (request, response) => {
    try {
        const bookId = request.params.id;
        const params = request.headers.email;
        const qty = request.body;
        console.log(qty);
        const addedBook = await cartService.updateCartQty(bookId,params,qty);
        setResponse(addedBook, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };

  export const removeCart = async (request, response) => {
    try {
        const cartId = request.params.id;
        const cartBook = await cartService.removeCartItem(cartId);
        setResponse({}, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };
