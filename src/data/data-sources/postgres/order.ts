import { IResponse } from '../../../dto/common.dto';
import { OrderModel } from '../../../data/model/postgres/order.model';
import { IOrder } from '../../../data/interfaces/order';
import { OrderDto } from '../../../dto/order.dto';
export class OrderDataSource implements IOrder {
    constructor() {
        OrderModel.sync({ alter: true })
    }
    async placeOrder(orderData: OrderDto): Promise<IResponse> {
        try {
            const data = await OrderModel.create(orderData);
            const resData: IResponse = { status: true, message: "Your order placed sucessfully", data };
            return resData;
        } catch (error: any) {
            const data: IResponse = { status: false, message: error.message };
            return data;
        }
    }

}