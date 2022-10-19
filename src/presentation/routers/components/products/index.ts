import { Router } from "express";
import { productsPing } from "./products.controller";
const productRouter: Router = Router();

productRouter.get('/', productsPing);

export default productRouter;