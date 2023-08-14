
import { IResponse } from '../../dto/common.dto';
import { IOrder } from '../../data/interfaces/order';
import { IOrderRepository } from '../interface/repositories/order-repository';
import { OrderDto } from '../../dto/order.dto';

export class OrderRepository implements IOrderRepository {
    orderDataSource: IOrder;
    constructor(orderDataSource: IOrder) {
        this.orderDataSource = orderDataSource;
    }
    async placeNewOrder(orderInfo: OrderDto): Promise<IResponse> {
        return this.orderDataSource.placeOrder(orderInfo)
    }
    async productOrder(orderId: string): Promise<IResponse> {
        return this.orderDataSource.productOrder(orderId);
    }
}