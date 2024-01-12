import * as userService from "../services/user-service.js";
import { setErrorResponse, setResponse } from "./response-handler.js";
import jwt from "jsonwebtoken";

export const createUser = async (request, response) => {
    try {
      const params = { ...request.body };
      // search if the user already exists
      const existingUser = await userService.searchByEmail(params);
      // if the user exists then throw error
      if (existingUser && Object.keys(existingUser).length()) {
        setErrorResponse('403', "User already exists.", response);
      } else {
          const newUser = await userService.create(params);
          setResponse(newUser, response);
      }
  
    } catch (e) {
      setErrorResponse('500', e, response);
    }
  };

  export const login = async (request, response) => {
    try {
      const params = { ...request.body };
      const user = await userService.searchByEmail(params);
  
      if (user && params.password === user.password) {
        const payload ={ id: user._id, email: user.email, password: user.password}; 
      const token = jwt.sign(payload,"secretEncryptKey",{ expiresIn: '30m' })

      // send it in the response
      setResponse({ token }, response);
        // setResponse(user, response);
      } else {
        setErrorResponse('401', "Invalid credentials", response);
      }
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };

  export const getUser = async (request, response) => {
    try {
      let user;
  
      // fetch query params
      const { email, id } = request.query;
  
      // check if we need to search data in db by email / id
      if (email && email !== null && email.trim() !== '') {
        user = await userService.searchByEmail({ email });
      } else {
        user = await userService.searchById({ id });
      }
  
      setResponse(user, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };

  export const removeUser = async (request, response) => {
    try {
      const id = request.params.id;
      const registerUser = await userService.remove(id);
      setResponse({}, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };
  
  export const updateUser = async (request, response) => {
    try {
      const id = request.params.id;
      const params = { ...request.body };
        // update user in user db
        const updatedUser = await userService.update(params, id);
        setResponse(updatedUser, response);
    } catch (e) {
      // TODO: Check and add the valid status codes.
      setErrorResponse('500', e, response);
    }
  };
  