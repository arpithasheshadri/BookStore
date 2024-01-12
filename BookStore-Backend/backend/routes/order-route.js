import * as orderController from "../controllers/order-controller.js";
import express from "express";

const router = express.Router();

router.route("/customerDetails").post(orderController.addOrderDetails);
router.route("/addOrder/:id").put(orderController.addOrder);

export default router;