import * as wishlistController from "../controllers/wishlist-controller.js";
import express from "express";

const router = express.Router();

router.route("/addToWishlist/:id").post(wishlistController.addWishlist);
router.route("/getWishlistItems").get(wishlistController.getWishlist);
router.route("/removeWishlistItem/:id").delete(wishlistController.removeWishlist);


export default router;