import { Router } from "express";
import { listAllProducts, newProduct } from "./products.controller";
const productRouter: Router = Router();

productRouter.post('/', newProduct);
productRouter.get('/', listAllProducts);


export default productRouter;