import { OrderDto } from "../../../dto/order.dto";
import { IResponse } from "../../../dto/common.dto";

export interface IOrderRepository {
    placeNewOrder(orderInfo: OrderDto): Promise<IResponse>;
    productOrder(orderId: string): Promise<IResponse>;
}