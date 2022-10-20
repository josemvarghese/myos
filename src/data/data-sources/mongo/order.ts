import { IResponse } from '../../../dto/common.dto';
import OrderModel from '../../../data/model/mongo/order.model';
import { IOrder } from '../../../data/interfaces/order';
import { OrderDto } from '../../../dto/order.dto';
export class OrderDataSource implements IOrder {

    async placeOrder(orderInfo: OrderDto): Promise<IResponse> {
        try {
            const data = await OrderModel.insertMany(orderInfo);
            let resData: IResponse = { status: true, message: "Your order placed sucessfully", data };
            return resData;
        } catch (error: any) {
            let data: IResponse = { status: false, message: error.message };
            return data;
        }
    }

}