
import { IResponse } from '../../dto/common.dto';
import { IProductRepository } from '../interface/repositories/product-repository';
import { IProduct } from '../../data/interfaces/product';
import { ListProductDto, NewProductDto } from '../../dto/product.dto';

export class ProductRepository implements IProductRepository {
    productDataSource: IProduct;
    constructor(productDataSource: IProduct) {
        this.productDataSource = productDataSource;
    }
    async listAllProducts(productList: ListProductDto): Promise<IResponse> {
        return this.productDataSource.listProducts(productList);
    }
    async createProduct(product: NewProductDto): Promise<IResponse> {
        return this.productDataSource.createProduct(product);
    }
}