
import { IResponse } from '../../dto/common.dto';
import { IOrder } from '../../data/interfaces/order';
import { IOrderRepository } from '../interface/repositories/order-repository';
import { OrderDto } from '../../dto/order.dto';

export class OrderRepository implements IOrderRepository {
    orderDatasource: IOrder;
    constructor(orderDatasource: IOrder) {
        this.orderDatasource = orderDatasource;
    }
    async placeNewOrder(orderInfo: OrderDto): Promise<IResponse> {
        return this.orderDatasource.placeOrder(orderInfo)
    }
}