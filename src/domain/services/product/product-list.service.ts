import { ListProductDto } from "../../../dto/product.dto";
import { IProductRepository } from "../../../domain/interface/repositories/product-repository";
import { IProductList } from "../../../domain/interface/services/product.servcie";
import { IResponse } from "../../../dto/common.dto";

export class ProductList implements IProductList {
    private productRepository: IProductRepository;

    constructor(productRepository: IProductRepository) {
        this.productRepository = productRepository;
    }

    async execute(productList: ListProductDto): Promise<IResponse> {
        return await this.productRepository.listAllProducts(productList);
    }
}