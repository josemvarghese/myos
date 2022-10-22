import { IProduct } from '../../interfaces/product';
import { IResponse } from '../../../dto/common.dto';
import ProductModel from '../../../data/model/mongo/product.model';
import { ListProductDto, NewProductDto, Sort } from '../../../dto/product.dto';
export class ProductDataSource implements IProduct {

    async createProduct(product: NewProductDto): Promise<IResponse> {
        try {
            const productInfo = new ProductModel(product) 
            const data = await productInfo.save();
            const resData: IResponse = { status: true, message: "New product Added successfully", data };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }
    async listProducts(productList: ListProductDto): Promise<IResponse> {
        let search: any = { status: true };
        if (productList.search) {
            search = { status: true, $or: [{ title: new RegExp(productList.search, "i") }, { description: new RegExp(productList.search, "i") }] }
        }
        let sort: any = { price: 1 }
        if (productList.price == Sort.DESC) {
            sort = { price: -1 }
        }
        try {
            const data = await ProductModel.find(
                search,
                {
                    _id: 1,
                    title: 1,
                    description: 1,
                    pictureUrl: 1,
                    price: 1,
                    quantity: 1
                }
            ).sort(sort).skip(productList.limit * productList.page).limit(productList.limit);
            const resData: IResponse = { status: true, message: "product list", data };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }
}