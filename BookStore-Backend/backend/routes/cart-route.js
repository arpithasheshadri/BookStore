import * as cartController from "../controllers/cart-controller.js";
import express from "express";

const router = express.Router();

router.route("/addToCartItem/:id").post(cartController.addCart);
router.route("/getCartItems").get(cartController.getCart);
router.route("/cartItemQuantity/:id").put(cartController.updateCartQuantity);
router.route("/removeCartItem/:id").delete(cartController.removeCart);


export default router;