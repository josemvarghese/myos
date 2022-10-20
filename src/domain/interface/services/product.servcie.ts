import { ListProductDto, NewProductDto } from "../../../dto/product.dto";
import { IResponse } from "../../../dto/common.dto";

export interface INewProduct {
    execute(product: NewProductDto): Promise<IResponse>;
}

export interface IProductList {
    execute(productList: ListProductDto): Promise<IResponse>;
}