import { Router } from "express";
import { orderPing } from "./order.controller";
const orderRouter: Router = Router();

orderRouter.get('/', orderPing);

export default orderRouter;