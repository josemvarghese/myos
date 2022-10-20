import { ProductRepository } from '../../../../domain/repositories/product.repository';
import { Request, Response } from 'express';
import { ProductDataSource } from '../../../../data/data-sources/mongo/product';
import { NewProduct } from '../../../../domain/services/product/new-product-service';
import { ProductList } from '../../../../domain/services/product/product-list.service';
import { ListProductDto, NewProductDto, Sort } from '../../../../dto/product.dto';



export const newProduct = async (req: Request, res: Response) => {
    const product: NewProductDto = req.body as NewProductDto;
    const productData: ProductDataSource = new ProductDataSource();
    const prodcutRepository: ProductRepository = new ProductRepository(productData);
    const newProduct: NewProduct = new NewProduct(prodcutRepository);
    const data: any = await newProduct.execute(product);
    res.statusCode = 200;
    return res.send(data);
}


export const listAllProducts = async (req: Request, res: Response) => {
    let productListFetch: ListProductDto = req.query as ListProductDto;
    productListFetch.limit = productListFetch.limit || 10;
    productListFetch.page = productListFetch.page ? (Number(productListFetch.page) - 1) : 0;
    productListFetch.price = productListFetch.price as Sort || Sort.DESC;
    const productData: ProductDataSource = new ProductDataSource();
    const prodcutRepository: ProductRepository = new ProductRepository(productData);
    const productList: ProductList = new ProductList(prodcutRepository);
    const data: any = await productList.execute(productListFetch);
    res.statusCode = 200;
    return res.send(data);
}