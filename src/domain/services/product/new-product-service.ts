import { NewProductDto } from "../../../dto/product.dto";
import { IProductRepository } from "../../../domain/interface/repositories/product-repository";
import { INewProduct } from "../../../domain/interface/services/product.servcie";
import { IResponse } from "../../../dto/common.dto";

export class NewProduct implements INewProduct {
    private productRepository: IProductRepository;

    constructor(productRepository: IProductRepository) {
        this.productRepository = productRepository;
    }

    async execute(product:NewProductDto): Promise<IResponse> {
        return await this.productRepository.createProduct(product);
    }
}