import cors from "cors";
import express from "express";
// import models from "./backend/models/index.js";
import mongoose from "mongoose";
import registerRoute from "./routes/index.js";

const initialize = (app) => {
  // Middlewares
  app.use(cors()); // If request isn't coming from same domain, server will reject the requests
  app.use(express.json()); // Converts JSON is req body to javascript object
  app.use(express.urlencoded({ extended: true })); // If encoded URL is received, it will decode

  mongoose.connect("mongodb+srv://sheshadribhata:aaUdDVWQX9fApUU2@clusterbookstore.uwtw6c8.mongodb.net/bookstore?retryWrites=true&w=majority"); //MongoDB connection
  
  registerRoute(app); //Initialize routes
};

export default initialize;