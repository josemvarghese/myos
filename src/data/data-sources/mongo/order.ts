import { IResponse } from '../../../dto/common.dto';
import OrderModel from '../../../data/model/mongo/order.model';
import { IOrder } from '../../../data/interfaces/order';
import { OrderDto } from '../../../dto/order.dto';
export class OrderDataSource implements IOrder {

    async placeOrder(orderData: OrderDto): Promise<IResponse> {
        try {
            const orderInfo = new OrderModel(orderData) 
            const data = await orderInfo.save();
            const resData: IResponse = { status: true, message: "Your order placed sucessfully", data };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }

}