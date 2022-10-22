import { IProduct } from '../../interfaces/product';
import { IResponse } from '../../../dto/common.dto';
import { ProductModel } from '../../../data/model/postgres/product.model';
import { ListProductDto, NewProductDto, Sort } from '../../../dto/product.dto';
import { Op } from 'sequelize';
export class ProductDataSource implements IProduct {
    constructor() {
        ProductModel.sync({ alter: true })
    }
    async createProduct(product: NewProductDto): Promise<IResponse> {
        try {
            const data = await ProductModel.create(product);
            const resData: IResponse = { status: true, message: "New product Added successfully", data };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }
    async listProducts(productList: ListProductDto): Promise<IResponse> {
        let sort: any = [['price', 'ASC']];
        if (productList.price == Sort.DESC) {
            sort = [['price', 'DESC']];
        }
        try {
            const limit: number = Number(productList.limit) || 10;
            const offset: number = productList.page ? ((Number(productList.page)) * Number(limit)) : 0;
            const query: any = productList.search ? {
                [Op.and]: [
                    { status: true },
                    {
                        [Op.or]: [
                            { title: { [Op.like]: `%${productList.search}` } },
                            { description: { [Op.like]: `%${productList.search}` } }
                        ]
                    }
                ]
            } : {};
            const productListInfo: any = await ProductModel.findAll({
                where: query,
                order: sort,
                offset,
                limit
            });
            const resData: IResponse = { status: true, message: "product list", data: productListInfo };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }
}