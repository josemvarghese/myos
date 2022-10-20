
import { IResponse } from '../../dto/common.dto';
import { IProductRepository } from '../interface/repositories/product-repository';
import { IProduct } from '../../data/interfaces/product';
import { ListProductDto, NewProductDto } from '../../dto/product.dto';

export class ProductRepository implements IProductRepository {
    productDatasource: IProduct;
    constructor(productDatasource: IProduct) {
        this.productDatasource = productDatasource;
    }
    async listAllProducts(productList: ListProductDto): Promise<IResponse> {
        return this.productDatasource.listProducts(productList);
    }
    async createProduct(product: NewProductDto): Promise<IResponse> {
        return this.productDatasource.createProduct(product);
    }
}