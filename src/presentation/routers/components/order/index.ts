import { Router } from "express";
import { placeOrder } from "./order.controller";
const orderRouter: Router = Router();

orderRouter.post('/', placeOrder);

export default orderRouter;