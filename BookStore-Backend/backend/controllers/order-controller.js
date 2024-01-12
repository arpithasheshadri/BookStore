import * as orderService from '../services/order-service.js';

import { setErrorResponse, setResponse } from "./response-handler.js";


export const addOrderDetails = async (request, response) => {
    try {
        const params = request.headers.email;
        const details = request.body;
        let payload = {
            email: params,
            details: details
        }
        const addedDetails = await orderService.addDetailsToOrder(payload);
        setResponse(addedDetails, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };

  export const addOrder = async (request, response) => {
    try {
        console.log("reached");
        // const params = request.headers.email;
        const cartId = request.params.id;
        console.log(cartId);
        const details = request.body;
        
        const addedDetails = await orderService.addOrderDetails(cartId,details);
        setResponse(addedDetails, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };