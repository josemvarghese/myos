import { ListProductDto, NewProductDto } from "../../dto/product.dto";
import { IResponse } from "../../dto/common.dto";

export interface IProduct {
    createProduct(product: NewProductDto): Promise<IResponse>;
    listProducts(productList: ListProductDto): Promise<IResponse>;
    updateProductQuantity(): Promise<IResponse>;
}