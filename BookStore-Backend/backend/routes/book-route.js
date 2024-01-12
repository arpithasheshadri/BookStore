import * as bookController from "../controllers/book-controller.js";
import express from "express";
import multer from "multer";

const router = express.Router();

router.route("/addBook").post(bookController.addBook);
router.route("/getBooks").get(bookController.getBooks);



export default router;