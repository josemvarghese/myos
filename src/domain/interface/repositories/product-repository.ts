import { ListProductDto, NewProductDto } from "../../../dto/product.dto";
import { IResponse } from "../../../dto/common.dto";

export interface IProductRepository {
    listAllProducts(productList: ListProductDto): Promise<IResponse>;
    createProduct(product: NewProductDto): Promise<IResponse>;
}